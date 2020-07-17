import { Request, Response } from "express";
import knex from "../database/connection";

class PointsController {
  async index(req: Request, res: Response) {
    const { uf, city, items } = req.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const filteredPoints = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    const serializedPoints = filteredPoints.map((point) => {
      return {
        ...point,
        image_url: `http://192.168.0.108:3333/uploads/${point.image}`,
      };
    });

    return res.json(serializedPoints);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return res.status(400).json({ message: "Point not found" });
    }

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.0.108:3333/uploads/${point.image}`,
    };

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    return res.json({ point: serializedPoint, items });
  }

  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      city,
      uf,
      latitude,
      longitude,
      items,
    } = req.body;

    const trx = await knex.transaction();

    const point = {
      image: req.file.filename,
      name,
      email,
      whatsapp,
      city,
      uf,
      latitude,
      longitude,
    };

    const insertedId = await trx("points").insert(point);

    const point_id = insertedId[0];

    const pointItems = items
      .split(",")
      .map((item: string) => Number(item.trim()))
      .map((item_id: Number) => {
        return {
          item_id,
          point_id,
        };
      });

    await trx("point_items").insert(pointItems);

    await trx.commit();

    return res.json({ id: point_id, ...point });
  }
}

export default PointsController;

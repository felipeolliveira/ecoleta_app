import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(req: Request, res: Response) {
    try {
      const items = await knex("items").select("*");

      const serializedItems = items.map((item) => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://192.168.0.108:3333/uploads/${item.image}`,
        };
      });

      return res.json(serializedItems);
    } catch (err) {
      console.log(err);
      return res.json(err);
    }
  }
}

export default ItemsController;

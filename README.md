<h1 align="center">Ecoleta - the "greenpeace" app </h1>
<p align="center">
  <img src="./ecoleta.svg" width="200px"/>
</p>

This app was developed on Next Level Week #01. It function is to find a waste collection nearest you. Helping you to contribute for the environment.

> It is not an official application. It was developed to study and practice 😄

## Screens

- Web version (I show register in database 😉 ): just to create a waste collect point.
<div align="center">
  <img src="./web.gif" width="auto"/>
</div>

- Mobile version: just to find a waste collect point
<div align="center">
  <img src="./mobile.gif" width="auto"/>
</div>

## Technologies and packages

- [NodeJS](https://nodejs.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Multer](https://github.com/expressjs/multer): middleware for handling multipart/form-data.
- [Leaflet](https://leafletjs.com/): awesome open-source map.
- [Axios](): for requests http.
- [Celebrate](): a middleware function tha wraps the joi validation library.
- [Knex](): a sql query builder

## Run

- Clone this repository.
- Run:
- `yarn` to install dependencies.
- `yarn knex:migrate` to create a database.sqlite in **src/databse**.
- `yarn knex:seed` to create default waste collect items.
- Then run `yarn dev` for server, `yarn start` for web and mobile.

### Stay Tuned

If you test the mobile app on your smartphone (not emulated), check your IP in Expo Developer Tools and change the property `base_url` in `src/services/api.ts` because your smartphone cannot access localhost urls.

---

<p align="center">
  <a href="https://www.linkedin.com/in/felipeolliveira/">
    <img src="https://img.icons8.com/color/32/000000/linkedin-circled.png">
  </a>
  &nbsp&nbsp&nbsp&nbsp
  <a href="https://github.com/felipeolliveira">
    <img width="32px" height="32px" src="https://img.icons8.com/ios-glyphs/48/000000/github.png">
  </a>
</p>

import { Express } from "express";
import { bodyParser } from "@main/middlewares/body-parser";

const setupMiddlewares = (app: Express): void => {
  app.use(bodyParser);
};

export default setupMiddlewares;

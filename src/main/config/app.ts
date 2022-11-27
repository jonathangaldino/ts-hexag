import express, { Express } from "express";
import setupMiddlewares from "@main/config/middlewares";

const setupApp = (): Express => {
  const app = express();
  setupMiddlewares(app);

  return app;
};

export default setupApp;

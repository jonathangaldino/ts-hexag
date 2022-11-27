import express, { Express } from "express";
import setupMiddlewares from "@main/config/middlewares";
import setupRoutes from "@main/config/routes";

const setupApp = (): Express => {
  const app = express();
  setupMiddlewares(app);
  setupRoutes(app);

  return app;
};

export default setupApp;

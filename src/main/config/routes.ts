import { Router, Express } from "express";
import userRoutes from "@main/routes/user-routes";

const setupRoutes = (app: Express): void => {
  const router = Router();

  app.use("/api", router);
  userRoutes(router);
};

export default setupRoutes;

import { Router } from "express";
import { expressRouteAdapter } from "../adapters/express-route-adapter";
import { makeCreateUserController } from "../factories/controllers/users/create-user/controller-factory";

export default (router: Router): void => {
  router.post("/users", expressRouteAdapter(makeCreateUserController()));
};

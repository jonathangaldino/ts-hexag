import { BaseController } from "@src/infra/http/controllers/BaseController";
import { CreateUserController } from "@src/infra/http/controllers/users/CreateUserController";
import { makeCreateUser } from "@src/main/factories/use-cases/users/create-user-factory";

export const makeCreateUserController = (): BaseController => {
  const useCase = makeCreateUser();
  return new CreateUserController(useCase);
};

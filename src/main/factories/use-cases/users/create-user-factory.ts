import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
import { CreateUser } from "@src/application/use-cases/user/CreateUser";
import { InMemoryUserRepository } from "@src/infra/db/inMemory/repositories/InMemoryUserRepository";

export const makeCreateUser = (): CreateUserInterface => {
  const userRepository = new InMemoryUserRepository();
  return new CreateUser(userRepository);
};

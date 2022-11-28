import { UuidGenerator } from "@src/application/helpers/uuid";
import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
import { CreateUser } from "@src/application/use-cases/user/CreateUser";
import { inMemoryUserRepository } from "@src/infra/db/inMemory/repositories/inMemoryUserRepository";

export const makeCreateUser = (): CreateUserInterface => {
  const uuidGenerator = new UuidGenerator();
  const userRepository = new inMemoryUserRepository(uuidGenerator);

  return new CreateUser(userRepository);
};

import { CreateUserRepository } from "@src/application/interfaces/repositories/user/CreateUserRepository";
import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
import { UserEntity } from "@src/domain/entities/UserEntity";

export class CreateUser implements CreateUserInterface {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  execute(userData: CreateUserInterface.Request): Promise<UserEntity> {
    return this.createUserRepository.createUser({
      ...userData,
    });
  }
}

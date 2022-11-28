import { UserRepository } from "@src/application/interfaces/repositories/UserRepository";
import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
import { UserEntity } from "@src/domain/entities/UserEntity";
import { UserAlreadyExistsError } from "./errors/create-user-errors";

export class CreateUser implements CreateUserInterface {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: CreateUserInterface.Request): Promise<UserEntity> {
    const maybeUser = await this.userRepository.findUserByEmail(userData.email);

    if (maybeUser) {
      throw new UserAlreadyExistsError();
    }

    return this.userRepository.createUser({
      ...userData
    });
  }
}

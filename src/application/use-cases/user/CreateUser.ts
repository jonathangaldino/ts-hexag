import { UserRepository } from "@src/application/interfaces/repositories/UserRepository";
import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
import { User } from "@src/application/domain/User";
import { UserAlreadyExistsError } from "./errors/create-user-errors";
import { BaseUseCaseError } from "@src/application/interfaces/BaseUseCaseError";

export class CreateUser implements CreateUserInterface {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    userData: CreateUserInterface.Request
  ): Promise<User | BaseUseCaseError> {
    const maybeUser = await this.userRepository.findUserByEmail(userData.email);

    if (maybeUser) {
      return new UserAlreadyExistsError();
    }

    return this.userRepository.createUser({
      ...userData
    });
  }
}

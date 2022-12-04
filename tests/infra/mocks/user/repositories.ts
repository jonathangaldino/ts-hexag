import { UserRepository } from "@src/application/interfaces/repositories/UserRepository";
import { User } from "@src/application/domain/User";
import { makeFakeUser } from "@tests/domain/mocks/entities";

export class UserRepositoryStub implements UserRepository {
  async createUser(userData: UserRepository.CreateUserRequest): Promise<User> {
    const fakeUser = makeFakeUser();

    return Promise.resolve(fakeUser);
  }

  findUserByEmail(
    email: string
  ): Promise<UserRepository.FindUserByEmailResponse> {
    return Promise.resolve(undefined);
  }
}

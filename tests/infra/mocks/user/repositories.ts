import { CreateUserRepository } from "@src/application/interfaces/repositories/user/CreateUserRepository";
import { UserEntity } from "@src/domain/entities/UserEntity";
import { makeFakeUser } from "@tests/domain/mocks/entities";

export class CreateUserRepositoryStub implements CreateUserRepository {
  async createUser(
    userData: CreateUserRepository.Request
  ): Promise<UserEntity> {
    const fakeUser = makeFakeUser();

    return Promise.resolve(fakeUser);
  }
}

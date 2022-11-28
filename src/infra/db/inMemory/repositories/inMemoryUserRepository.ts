import { UniqueIdGenerator } from "@src/application/interfaces/helpers/UniqueIdGenerator";
import { UserRepository } from "@src/application/interfaces/repositories/UserRepository";
import { UserEntity, UserProps } from "@src/domain/entities/UserEntity";

const inMemoryDatabase = new Map<string, UserProps>();

export class inMemoryUserRepository implements UserRepository {
  constructor(private readonly genUuid: UniqueIdGenerator) {}

  createUser(userData: UserRepository.CreateUserRequest): Promise<UserEntity> {
    const id = this.genUuid.generate();

    inMemoryDatabase.set(id, { id, ...userData });

    const user = new UserEntity({ id, email: userData.email });

    return Promise.resolve(user);
  }

  findUserByEmail(email: string): Promise<UserEntity | undefined> {
    let maybeUser: UserEntity | undefined;

    inMemoryDatabase.forEach((user) => {
      if (user.email === email) {
        maybeUser = user;
      }
    });

    return Promise.resolve(maybeUser);
  }
}

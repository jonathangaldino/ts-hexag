import { UniqueIdGenerator } from "@src/application/interfaces/helpers/UniqueIdGenerator";
import { UserRepository } from "@src/application/interfaces/repositories/UserRepository";
import { User, UserProps } from "@src/application/domain/User";

const inMemoryDatabase = new Map<string, UserProps>();

export class inMemoryUserRepository implements UserRepository {
  constructor(private readonly genUuid: UniqueIdGenerator) {}

  createUser(userData: UserRepository.CreateUserRequest): Promise<User> {
    const id = this.genUuid.generate();

    inMemoryDatabase.set(id, { id, ...userData });

    const user = new User({ id, email: userData.email });

    return Promise.resolve(user);
  }

  findUserByEmail(email: string): Promise<User | undefined> {
    let maybeUser: User | undefined;

    inMemoryDatabase.forEach((user) => {
      if (user.email === email) {
        maybeUser = user;
      }
    });

    return Promise.resolve(maybeUser);
  }
}

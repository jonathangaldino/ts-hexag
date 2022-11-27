import { IUserRepository } from "@repositories/IUserRepository"
import { UserEntity } from "@entities/UserEntity"

const inMemoryDatabase = new Map<string, UserEntity>()

// default user to test getUser() method
const defaultUser = new UserEntity('321', 'jaja@gmail.com');
inMemoryDatabase.set(defaultUser.getId(), defaultUser);
// -----------------------------------------------------



export class InMemoryUserRepository implements IUserRepository {
  save(user: UserEntity): Promise<boolean> {
    inMemoryDatabase.set(user.getId(), user);

    return Promise.resolve(true)
  }

  getUser(id: string): Promise<UserEntity> {
    const maybeUser = inMemoryDatabase.get(id);

    if (!maybeUser) {
      throw new Error(`User ${id} not found`)
    }

    return Promise.resolve(maybeUser);
  }
}

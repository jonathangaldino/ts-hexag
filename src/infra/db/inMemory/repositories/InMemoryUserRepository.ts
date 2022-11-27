import { CreateUserRepository } from "@src/application/interfaces/repositories/user/CreateUserRepository";
import { UserEntity, UserProps } from "@src/domain/entities/UserEntity";

const inMemoryDatabase = new Map<string, UserProps>();

// default user to test getUser() method
const defaultUser = new UserEntity({
  id: "321",
  email: "jaja@gmail.com",
});
inMemoryDatabase.set(defaultUser.id, defaultUser);
// -----------------------------------------------------

export class InMemoryUserRepository implements CreateUserRepository {
  createUser(userData: CreateUserRepository.Request): Promise<UserEntity> {
    const id = "321";
    inMemoryDatabase.set(userData.email, { id, ...userData });

    const user = new UserEntity({ id, email: userData.email });

    return Promise.resolve(user);
  }
}

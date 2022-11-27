import { UserEntity } from "./domain/entities/UserEntity";
import { InMemoryUserRepository } from "./domain/repositories/InMemoryUserRepository";

const user = new UserEntity("123", "johnzballad@gmail.com");

const inMemoryDB = new InMemoryUserRepository();

async function main() {
  await inMemoryDB.save(user);

  // find just saved user
  const foundUser = await inMemoryDB.getUser(user.getId())
  console.log('Found user: ', foundUser)

}

main()

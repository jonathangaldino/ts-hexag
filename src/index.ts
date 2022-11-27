import { CreateUser } from "./application/use-cases/user/CreateUser";
import { UserEntity } from "./domain/entities/UserEntity";
import { InMemoryUserRepository } from "./infra/db/inMemory/repositories/InMemoryUserRepository";

async function main() {
  const inMemoryUserRepository = new InMemoryUserRepository()
  const createUserUseCase = new CreateUser(inMemoryUserRepository)

  const newUser = await createUserUseCase.execute({ email: 'johnzballad@gmail.com' })
  console.log(newUser)
}

main()

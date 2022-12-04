import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
import { makeFakeUser } from "@tests/domain/mocks/entities";

export class CreateUserStub implements CreateUserInterface {
  execute(
    userData: CreateUserInterface.Request
  ): Promise<CreateUserInterface.Response> {
    const fakeUser = makeFakeUser();

    return Promise.resolve(fakeUser);
  }
}

import { CreateUser } from "@src/application/use-cases/user/CreateUser";
import { makeFakeUser } from "@tests/domain/mocks/entities";
import { CreateUserRepositoryStub } from "@tests/infra/mocks/user/repositories";

type SutTypes = {
  sut: CreateUser;
  createUserRepositoryStub: CreateUserRepositoryStub;
};

const makeSut = (): SutTypes => {
  const createUserRepositoryStub = new CreateUserRepositoryStub();
  const sut = new CreateUser(createUserRepositoryStub);

  return {
    sut,
    createUserRepositoryStub
  };
};

describe("CreateUser", () => {
  it("should call CreateUserRepository with correct data", async () => {
    const { sut, createUserRepositoryStub } = makeSut();
    const createUserSpy = jest.spyOn(createUserRepositoryStub, "createUser");

    const { email } = makeFakeUser();

    await sut.execute({ email });

    expect(createUserSpy).toHaveBeenCalledWith({
      email
    });
  });

  it("should return an User on succes", async () => {
    const { sut } = makeSut();
    const { email, id } = makeFakeUser();

    const response = await sut.execute({ email });

    expect(response).toHaveProperty("id", id);
    expect(response).toHaveProperty("email", email);
  });
});

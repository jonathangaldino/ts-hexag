import { CreateUser } from "@src/application/use-cases/user/CreateUser";
import { makeFakeUser } from "@tests/domain/mocks/entities";
import { UserRepositoryStub } from "@tests/infra/mocks/user/repositories";

type SutTypes = {
  sut: CreateUser;
  userRepositoryStub: UserRepositoryStub;
};

const makeSut = (): SutTypes => {
  const userRepositoryStub = new UserRepositoryStub();
  const sut = new CreateUser(userRepositoryStub);

  return {
    sut,
    userRepositoryStub
  };
};

describe("CreateUser", () => {
  it("should call CreateUserRepository with correct data", async () => {
    const { sut, userRepositoryStub } = makeSut();
    const createUserSpy = jest.spyOn(userRepositoryStub, "createUser");

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

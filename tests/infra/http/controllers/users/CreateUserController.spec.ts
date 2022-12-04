import { UserAlreadyExistsError } from "@src/application/use-cases/user/errors/create-user-errors";
import { CreateUserController } from "@src/infra/http/controllers/users/CreateUserController";
import { HttpRequest } from "@src/infra/http/interfaces/HttpRequest";
import { CreateUserStub } from "@tests/application/mocks/users/use-cases";
import { makeFakeUser } from "@tests/domain/mocks/entities";

type SutTypes = {
  sut: CreateUserController;
  createUserStub: CreateUserStub;
};

const makeSut = (): SutTypes => {
  const createUserStub = new CreateUserStub();
  const sut = new CreateUserController(createUserStub);

  return {
    sut,
    createUserStub
  };
};

const makeFakeHttpRequest = (): HttpRequest => {
  const { email } = makeFakeUser();

  return {
    body: {
      email
    }
  };
};

describe("Name of the group", () => {
  it("should call CreateUser with correct params", async () => {
    const { sut, createUserStub } = makeSut();

    const createPostSpy = jest.spyOn(createUserStub, "execute");

    const httpRequest = makeFakeHttpRequest();
    await sut.handle(httpRequest);

    expect(createPostSpy).toHaveBeenCalledWith({
      ...httpRequest.body
    });
  });

  it("should handle UserAlreadyExistsError", async () => {
    const { sut, createUserStub } = makeSut();
    jest.spyOn(createUserStub, "execute").mockImplementationOnce(async () => {
      throw new UserAlreadyExistsError();
    });

    const httpRequest = makeFakeHttpRequest();

    const getBadResults = async () => {
      await sut.execute(httpRequest);
    };

    expect(getBadResults).rejects.toHaveProperty("statusCode", 400);
  });

  it("should handle reject any error if otherwise", async () => {
    const { sut, createUserStub } = makeSut();
    const mockError = new Error("Any error");
    jest.spyOn(createUserStub, "execute").mockImplementationOnce(async () => {
      throw mockError;
    });

    const httpRequest = makeFakeHttpRequest();

    const getBadResults = async () => {
      await sut.execute(httpRequest);
    };

    expect(getBadResults).rejects.toEqual(mockError);
  });
});

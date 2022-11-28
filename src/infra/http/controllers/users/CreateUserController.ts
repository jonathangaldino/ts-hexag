import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
import { UserAlreadyExistsError } from "@src/application/use-cases/user/errors/create-user-errors";
import { badRequest } from "../../helpers/http";
import { HttpRequest } from "../../interfaces/HttpRequest";
import { HttpResponse } from "../../interfaces/HttpResponse";

export class CreateUserController extends BaseController {
  constructor(private readonly createUser: CreateUserInterface) {
    super();
  }

  async execute(
    httpRequest: CreateUserController.Request
  ): Promise<CreateUserController.Response> {
    const { email } = httpRequest.body!;

    try {
      const { id } = await this.createUser.execute({ email });

      return Promise.resolve({
        statusCode: 201,
        body: {
          id
        }
      });
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return Promise.reject(badRequest(error));
      }

      return Promise.reject(error);
    }
  }
}

export namespace CreateUserController {
  export type Request = HttpRequest<CreateUserInterface.Request>;
  export type Response = HttpResponse<{ id: string }>;
}

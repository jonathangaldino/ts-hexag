import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateUserInterface } from "@src/application/interfaces/use-cases/user/CreateUserInterface";
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

    const { id } = await this.createUser.execute({ email });

    return Promise.resolve({
      statusCode: 201,
      body: {
        id
      }
    });
  }
}

export namespace CreateUserController {
  export type Request = HttpRequest<CreateUserInterface.Request>;
  export type Response = HttpResponse<{ id: string }>;
}

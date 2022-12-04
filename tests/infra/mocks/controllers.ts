import { BaseController } from "@src/infra/http/controllers/BaseController";
import { ok } from "@src/infra/http/helpers/http";
import { HttpRequest } from "@src/infra/http/interfaces/HttpRequest";
import { HttpResponse } from "@src/infra/http/interfaces/HttpResponse";

export class ControllerStub extends BaseController {
  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok("any_body");
  }
}

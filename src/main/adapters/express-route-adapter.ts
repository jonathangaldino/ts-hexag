import { BaseController } from "@src/infra/http/controllers/BaseController";
import { HttpRequest } from "@src/infra/http/interfaces/HttpRequest";
import { Request, Response } from "express";

export const expressRouteAdapter =
  (controller: BaseController) => async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers
    };

    const HttpResponse = await controller.handle(httpRequest);

    if (HttpResponse.statusCode >= 200 && HttpResponse.statusCode <= 299) {
      res.status(HttpResponse.statusCode).json(HttpResponse.body);
    } else {
      res.status(HttpResponse.statusCode).json({
        error: HttpResponse.body?.message
      });
    }
  };

import { UseCaseInterface } from "@src/application/interfaces/use-cases/UseCaseInterface";
import { User, UserProps } from "@src/application/domain/User";
import { BaseUseCaseError } from "../../BaseUseCaseError";

export interface CreateUserInterface
  extends UseCaseInterface<
    CreateUserInterface.Request,
    CreateUserInterface.Response
  > {
  execute(
    userData: CreateUserInterface.Request
  ): Promise<CreateUserInterface.Response>;
}

export namespace CreateUserInterface {
  export type Request = Omit<UserProps, "id">;
  export type Response = User | BaseUseCaseError;
}

import { UseCaseInterface } from "@src/application/interfaces/use-cases/UseCaseInterface";
import { UserProps } from "@src/domain/entities/UserEntity";

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
  export type Response = UserEntity;
}

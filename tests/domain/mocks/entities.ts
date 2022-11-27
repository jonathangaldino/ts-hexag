import { UserEntity } from "@src/domain/entities/UserEntity";

export const makeFakeUser = (): UserEntity =>
  new UserEntity({
    id: "any_id",
    email: "any_email@gmail.com"
  });

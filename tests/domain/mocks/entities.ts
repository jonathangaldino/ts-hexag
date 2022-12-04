import { User } from "@src/application/domain/User";

export const makeFakeUser = (): User =>
  new User({
    id: "any_id",
    email: "any_email@gmail.com"
  });

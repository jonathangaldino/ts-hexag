import { ApplicationError } from "@src/application/interfaces/errors/ApplicationError";

export class UserAlreadyExistsError extends ApplicationError {
  constructor() {
    super();
    this.message = "User already exists";
  }
}

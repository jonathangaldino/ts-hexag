import { BaseUseCaseError } from "@src/application/interfaces/BaseUseCaseError";

export class UserAlreadyExistsError extends BaseUseCaseError {
  constructor() {
    super();
    this.message = "User already exists";
  }
}

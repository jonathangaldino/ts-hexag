export class BaseUseCaseError extends Error {
  constructor(stack?: string) {
    super("UseCase Error");
    this.name = "UseCaseError";
    this.stack = stack;
  }
}

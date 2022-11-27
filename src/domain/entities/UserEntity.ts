export class UserEntity {
  private id: string;
  private email: string;

  constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
  }

  public getId() {
    return this.id;
  }

  public getEmail() {
    return this.email;
  }
}

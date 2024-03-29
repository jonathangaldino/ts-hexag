export type UserProps = {
  id: string;
  email: string;
};

export class User {
  public readonly id: string;
  public readonly email: string;

  constructor(props: UserProps) {
    this.id = props.id;
    this.email = props.email;
  }
}

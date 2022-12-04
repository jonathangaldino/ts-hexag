import { User, UserProps } from "@src/application/domain/User";

export interface UserRepository {
  createUser(
    userData: UserRepository.CreateUserRequest
  ): Promise<UserRepository.CreateUserResponse>;

  findUserByEmail(
    email: UserRepository.FindUserByEmailRequest
  ): Promise<UserRepository.FindUserByEmailResponse>;
}

export namespace UserRepository {
  export type CreateUserRequest = Omit<UserProps, "id">;
  export type CreateUserResponse = User;

  export type FindUserByEmailRequest = string;
  export type FindUserByEmailResponse = User | undefined;
}

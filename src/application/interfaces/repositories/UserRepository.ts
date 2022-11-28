import { UserEntity, UserProps } from "@src/domain/entities/UserEntity";

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
  export type CreateUserResponse = UserEntity;

  export type FindUserByEmailRequest = string;
  export type FindUserByEmailResponse = UserEntity | undefined;
}

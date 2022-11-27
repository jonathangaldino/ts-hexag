import { UserEntity, UserProps } from "@src/domain/entities/UserEntity";

export interface CreateUserRepository {
  createUser(userData: CreateUserRepository.Request): Promise<CreateUserRepository.Response>;
}

export namespace CreateUserRepository {
  export type Request = Omit<UserProps, 'id'>;
  export type Response = UserEntity;
}

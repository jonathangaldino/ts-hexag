import { UserEntity } from "@entities/UserEntity"

export interface IUserRepository {
  save(user: UserEntity): Promise<boolean>;
  getUser(id: string): Promise<UserEntity>;
}

import { v4 as uuidv4 } from "uuid";
import { UniqueIdGenerator } from "../interfaces/helpers/UniqueIdGenerator";

export class UuidGenerator implements UniqueIdGenerator {
  generate(): string {
    return uuidv4();
  }
}

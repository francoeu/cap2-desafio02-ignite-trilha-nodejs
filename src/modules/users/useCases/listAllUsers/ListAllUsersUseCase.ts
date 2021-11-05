import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (typeof user !== "undefined") {
      if (!user.admin) {
        throw new Error("No permission");
      }
      return this.usersRepository.list();
    }
    throw new Error("User not found!");
  }
}

export { ListAllUsersUseCase };

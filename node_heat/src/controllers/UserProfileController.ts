import { Request, Response } from "express";
import { UserProfileService } from "../services/UserProfileService";

class UserProfileController {
  async handle(request: Request, response: Response) {
    const service = new UserProfileService();

    const { user_id } = request;
 
    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { UserProfileController }
import prismaClient from "../prisma";

class UserProfileService{
  async execute(user_id: string){
    const user = prismaClient.user.findFirst({
     where: {
       id: user_id
     } 
    });

    return user;
  }
}

export { UserProfileService };
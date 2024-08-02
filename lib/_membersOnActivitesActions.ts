"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

// Get all activites
export const getAllMembersOnActivites = async () => {
  try {
    const activites = await prisma.membersOnActivites.findMany();

    //revalidatePath("/activites");

    return {
      success: true,
      data: activites,
    };
  } catch (error) {}
};

export const assignActivity = async (id: any, members: any) => {
  console.log("------AssignationId", id);
  console.log("------AssignationGlobal", members);

  try {
    const activite = await prisma.membersOnActivites.deleteMany({
      where: {
        activiteId: +id,
      },
    });

    /*     revalidatePath(`/activites/${id}`);
    revalidatePath(`/activites/${id}/equipe`);
    revalidatePath("/activites");
 
    return {
      success: true,
      data: activite,
      status: "OK",
      msg: "",
    };*/
  } catch (error) {}

  for (let i = 0; i < members.length; i++) {
    if (members[i].serv === true) {
      console.log("FN: ", members[i].firstname);

      try {
        const mbrOnActivite = await prisma.membersOnActivites.create({
          data: { activiteId: +id, memberId: members[i].id },
        });

        /*         return {
          success: true,
          data: mbrOnActivite,
          status: "OK",
          msg: "",
        }; */
      } catch (error) {}
    }
  }

  revalidatePath(`/activites/${id}`);
  revalidatePath(`/activites/${id}/equipe`);
  revalidatePath("/activites");
};

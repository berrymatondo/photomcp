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

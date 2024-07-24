"use server";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { z } from "zod";
//import { auth, signIn, signOut } from "@/auth";
//import { ContinentsList } from "@prisma/client";
import prisma from "./prisma";
import { MemberSchema } from "./schemas";
import { MemberStatuses } from "@prisma/client";

type Inputs = z.infer<typeof MemberSchema>;

// Create MEMBER
export const createMember = async (data: Inputs) => {
  //console.log("registerUser", data);

  const result = MemberSchema.safeParse(data);

  if (result.success) {
    const { firstname, lastname, email, mobile, comments } = result.data;

    //console.log("Order", order, countryId);

    try {
      const member = await prisma.member.create({
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          mobile: data.mobile,
          comments: data.comments,
        },
      });
      revalidatePath(`/team`);

      return { success: true, data: member };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};

// update MEMBER
export const updateGO = async (data: Inputs) => {
  //console.log("registerUser", data);

  const result = MemberSchema.safeParse(data);

  if (result.success) {
    const { id, firstname, lastname, email, mobile, comments, status } =
      result.data;

    try {
      const member = await prisma.member.update({
        where: {
          id: data.id ? +data.id : undefined,
        },
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          mobile: data.mobile,
          status: data.status as MemberStatuses,
          comments: data.comments,
        },
      });
      revalidatePath(`/team`);
      return { success: true, data: member };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};

// Get all members
export const getAllMembers = async () => {
  try {
    const members = await prisma.member.findMany();

    revalidatePath("/team");

    return {
      success: true,
      data: members,
    };
  } catch (error) {}
};

// Get all gos by country
/* export const getGosByCountry = async (countryId: string) => {
  try {
    const gos = await prisma.go.findMany({
      where: {
        id: +countryId,
      },
    });
    revalidatePath("/admin/countries");

    return {
      success: true,
      data: gos,
    };
  } catch (error) {}
}; */

// GET SPECIFIC MEMBER by ID
export const getMember = async (memberId: number) => {
  try {
    const member = await prisma.member.findUnique({
      where: {
        id: memberId,
      },
    });

    return {
      success: true,
      data: member,
    };
  } catch (error) {}
};

// DELETE member
export const deleteMember = async (memberId: number) => {
  const check = await checkAuth("ADMIN");

  if (check.status == "KO") return check;

  try {
    const member = await prisma.member.delete({
      where: {
        id: +memberId,
      },
    });

    revalidatePath(`/team`);

    return {
      success: true,
      data: member,
      status: "OK",
      msg: "",
    };
  } catch (error) {}
};

export const checkAuth = async (role: string) => {
  //TEMPOOOOOO
  let status = "OK";

  ///TEMPO

  /*   const session = await auth();

  console.log("AUTH SESSION:", session?.user);

  let user: any = session?.user;
  let status = "KO";
  if (user?.role == role) status = "OK";

  if (user?.status != "ACTIF") status = "KO"; */

  return {
    success: true,
    data: "",
    status: status,
    msg:
      status == "OK"
        ? ""
        : "Vous n'avez pas les droits nécessaires pour effectuer cette opération",
  };
};

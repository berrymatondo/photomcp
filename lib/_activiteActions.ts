"use server";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { z } from "zod";
//import { auth, signIn, signOut } from "@/auth";
//import { ContinentsList } from "@prisma/client";
import prisma from "./prisma";
import { ActiviteSchema } from "./schemas";

type Inputs = z.infer<typeof ActiviteSchema>;

// Create ACTIVITE
export const createActivite = async (data: Inputs) => {
  //console.log("registerUser", data);

  const result = ActiviteSchema.safeParse(data);

  if (result.success) {
    const { name, date, comments } = result.data;

    //console.log("Order", order, countryId);

    try {
      const activite = await prisma.activite.create({
        data: {
          name: data.name,
          date: data.date.split("-").reverse().join("-"),
          comments: data.comments,
        },
      });
      revalidatePath(`/activites`);

      return { success: true, data: activite };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};

// update ACTIVITE
export const updateActivite = async (data: Inputs) => {
  //console.log("registerUser ", data);

  const result = ActiviteSchema.safeParse(data);

  if (result.success) {
    const { id, name, date, comments } = result.data;

    try {
      const activite = await prisma.activite.update({
        where: {
          id: data.id ? +data.id : undefined,
        },
        data: {
          name: data.name,
          date: data.date.split("-").reverse().join("-"),
          comments: data.comments ? data.comments : "",
        },
      });
      revalidatePath(`/activite`);
      return { success: true, data: activite };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};

// Get all activites
export const getAllActivites = async () => {
  try {
    const activites = await prisma.activite.findMany({
      include: {
        members: true,
        _count: true,
      },
    });

    revalidatePath("/activites");

    return {
      success: true,
      data: activites,
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

// GET SPECIFIC ACTIVITE by ID
export const getActivite = async (activiteId: number) => {
  try {
    const activite = await prisma.activite.findUnique({
      where: {
        id: +activiteId,
      },
      include: {
        members: true,
      },
    });

    return {
      success: true,
      data: activite,
    };
  } catch (error) {}
};

// DELETE activite
export const deleteActivite = async (activiteId: number) => {
  const check = await checkAuth("ADMIN");

  if (check.status == "KO") return check;

  try {
    const activite = await prisma.activite.delete({
      where: {
        id: +activiteId,
      },
    });

    revalidatePath(`/activites`);

    return {
      success: true,
      data: activite,
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

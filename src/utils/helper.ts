import { iSignUp } from "@/interface/auth";
import { getDB } from "../../database/db";

export const signUpUser = async (user: iSignUp) => {
  const db = await getDB();

  if (!db) throw new Error("Database not available");

  const existing = await db.get("users", user.email);

  if (existing) {
    throw new Error("User already exists");
  }

  await db.put("users", user);
};

export const signInUser = async (email: string, password: string) => {
  const db = await getDB();

  if (!db) throw new Error("Database not available");

  const user = await db.get("users", email);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  localStorage.setItem("session", JSON.stringify({ email }));

  return user;
};

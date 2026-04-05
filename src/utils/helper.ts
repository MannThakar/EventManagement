import { iSignUp } from "@/interface/auth";
import { getDB } from "../../database/db";
import toast from "react-hot-toast";
import { iEvent } from "@/interface/event";
import dayjs from "dayjs";

const generateFakeJWT = (email: string) => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      email,
      exp: Date.now() + 1000 * 60 * 60,
    }),
  );
  const signature = btoa("fake-signature");

  return `${header}.${payload}.${signature}`;
};

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
  const jwt = generateFakeJWT(email);
  localStorage.setItem("session", jwt);

  return user;
};

export const saveEvent = async (event: iEvent) => {
  const db = await getDB();
  if (!db) return;

  await db.put("events", event);
};

export const getAllEvents = async (): Promise<iEvent[]> => {
  const db = await getDB();
  if (!db) return [];

  return await db.getAll("events");
};

export const deleteEvent = async (id: string) => {
  const db = await getDB();
  if (!db) return;

  await db.delete("events", id);
};

export const successToast = (message: string) => {
  toast.success(message, {
    position: "top-right",
    duration: 2000,
    style: { background: "#d9f7be", color: "green" },
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    position: "top-right",
    duration: 2000,
    style: { background: "#fcebec", color: "red" },
  });
};

export const getNextTimeSlot = () => {
  const now = dayjs();

  const roundedMinutes = Math.ceil(now.minute() / 30) * 30;

  if (roundedMinutes === 60) {
    return now.add(1, "hour").minute(0).second(0).toDate();
  }

  return now.minute(roundedMinutes).second(0).toDate();
};

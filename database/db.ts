import { openDB } from "idb";

export const getDB = async () => {
  if (typeof window === "undefined") return null;

  return openDB("eventify", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "email" });
      }

      if (!db.objectStoreNames.contains("events")) {
        db.createObjectStore("events", { keyPath: "id" });
      }
    },
  });
};

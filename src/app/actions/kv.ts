"use server";
import { kv } from "@vercel/kv";

export const getResultOpenState = async () => {
  return await kv.set("resultOpen", "true");
};

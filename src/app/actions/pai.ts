"use server";

import { supabase } from "@/libs/supabase";
import { PaiType } from "@/types/paiType";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";

export const createVote = async (situationId: string, answer: PaiType) => {
  const uuid = uuidv4();

  try {
    const { error } = await supabase.from("votes").insert({
      id: uuid,
      situation_id: situationId,
      answer: answer,
    });

    console.log("error is ", error);
  } catch (error) {
    console.error("error is ", error);
  } finally {
    revalidatePath(`/kinma/${situationId}`);
  }
};

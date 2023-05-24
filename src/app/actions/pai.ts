"use server";

import { supabase } from "@/libs/supabase";
import { PaiType } from "@/types/paiType";
import { v4 as uuidv4 } from "uuid";

export const createVote = async (situationId: string, answer: PaiType) => {
  const { error } = await supabase.from("votes").insert({
    id: uuidv4(),
    situationId: situationId,
    answer: answer,
  });

  console.log(error);
};

import { createChatCompletion } from "@/libs/nanikiru";
import { supabase } from "@/libs/supabase";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const pattern: RegExp = /(s[1-9]|m[1-9]|p[1-9]|j[1-7])/;

export async function GET() {
  const situation = await createChatCompletion();

  const situationCreated = await supabase.from("situations").insert({
    id: uuidv4(),
    tehai: situation.tehai.map((pai) => pattern.exec(pai)![0]),
    junme: parseInt(situation.junme, 10),
    bakaze: situation.bakaze,
    jikaze: situation.jikaze,
    dora: pattern.exec(situation.dora)![0],
    isParent: JSON.parse(situation.isParent),
    tsumo: pattern.exec(situation.tsumo)![0],
  });

  return NextResponse.json({
    data: situationCreated,
    situation: situation,
  });
}

import { supabase } from "@/libs/supabase";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await supabase.from("votes").insert({
      id: uuidv4(),
      situationId: body?.situationId,
      answer: body?.answer,
    });

    return NextResponse.json({ result });
  } catch (err) {
    console.log(err);
  }
}

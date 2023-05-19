import { supabase } from "@/libs/supabase";
import { Situation } from "../situation/situation";
import { AnswerOptions } from "../../client/answer-options/answer-options";
import { PaiType } from "@/types/paiType";

export const Nanikiru = async () => {
  const situation = await supabase.from("situations").select("*");
  const record = situation.data ? situation.data[5] : null;

  return (
    <div className="flex flex-col gap-5">
      {/* @ts-expect-error Server Component */}
      <Situation record={record}></Situation>
      <div className="w-[90%] my-5 mx-auto">
        <AnswerOptions tehai={record?.tehai as PaiType[]}></AnswerOptions>
      </div>
    </div>
  );
};

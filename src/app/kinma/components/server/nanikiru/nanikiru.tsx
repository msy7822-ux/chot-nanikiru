import { supabase } from "@/libs/supabase";
import { Situation } from "../situation/situation";
import { AnswerOptions } from "../../client/answer-options/answer-options";
import { PaiType } from "@/types/paiType";
import { Results } from "../../client/results/results";

export const Nanikiru = async ({ situationId }: { situationId: string }) => {
  const { data: latestRecord } = await supabase
    .from("situations")
    .select("*")
    .eq("id", situationId)
    .single();

  const { data: votes, error } = await supabase
    .from("votes")
    .select("*")
    .eq("situation_id", `${situationId}`);

  console.log("error is ", error);

  return (
    <div className="flex flex-col gap-5">
      <Situation record={latestRecord!}></Situation>
      <AnswerOptions
        situationId={situationId}
        tehai={latestRecord?.tehai as PaiType[]}
        tsumo={latestRecord?.tsumo as PaiType}
        isDisplay
      ></AnswerOptions>

      <Results
        votes={votes}
        tehai={latestRecord?.tehai as PaiType[]}
        tsumo={latestRecord?.tsumo as PaiType}
      ></Results>
    </div>
  );
};

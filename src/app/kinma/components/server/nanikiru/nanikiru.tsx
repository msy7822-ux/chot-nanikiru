import { supabase } from "@/libs/supabase";
import { Situation } from "../situation/situation";
import { AnswerOptions } from "../../client/answer-options/answer-options";
import { PaiType } from "@/types/paiType";
import { Results } from "../results/results";

export const Nanikiru = async () => {
  const situation = await supabase.from("situations").select("*");
  const latestRecord = situation.data ? situation.data?.slice(-1)[0] : null;
  const votes = await supabase
    .from("votes")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    <div className="flex flex-col gap-5">
      {/* @ts-expect-error Server Component */}
      <Situation record={latestRecord}></Situation>
      <AnswerOptions
        tehai={latestRecord?.tehai as PaiType[]}
        tsumo={latestRecord?.tsumo as PaiType}
        isDisplay
      ></AnswerOptions>

      {/* @ts-expect-error Server Component */}
      <Results
        votes={votes}
        tehai={latestRecord?.tehai as PaiType[]}
        tsumo={latestRecord?.tsumo as PaiType}
      ></Results>
    </div>
  );
};

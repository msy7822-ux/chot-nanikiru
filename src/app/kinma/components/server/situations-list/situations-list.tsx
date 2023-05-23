import { SituationItem } from "./situation-item/situation-item";
import { supabase } from "@/libs/supabase";

let limit = 5;

export const SituationsList = async () => {
  const { data: situations } = await supabase
    .from("situations")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        {situations?.map((situation, i) => (
          <div key={i}>
            <SituationItem situation={situation}></SituationItem>
          </div>
        ))}
      </div>

      {/* <button type="button">もっと見る</button> */}
    </div>
  );
};

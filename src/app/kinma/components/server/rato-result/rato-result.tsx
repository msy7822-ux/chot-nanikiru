import { supabase } from "@/libs/supabase";
import { Pai } from "../pai/pai";
import { convertPaiName } from "@/utils/pai";
import { PaiType } from "@/types/paiType";

export const RatoResult = async ({ isDisplay }: { isDisplay: boolean }) => {
  if (!isDisplay) return null;

  const situation = await supabase.from("situations").select("*");
  const record = situation.data ? situation.data[5] : null;
  const { tehai } = record! as { tehai: PaiType[] };
  const votes = await supabase.from("votes").select("*");

  return (
    <div>
      <div className="grid grid-cols-4 gap-y-5 place-items-center">
        {tehai &&
          tehai.map((pai, i) => {
            return (
              <div className="cursor-pointer text-center" key={i}>
                <div className="font-bold">{convertPaiName(pai)}</div>
                <div>
                  <Pai type={pai}></Pai>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

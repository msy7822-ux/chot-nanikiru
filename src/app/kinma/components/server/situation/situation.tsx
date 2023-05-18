import { Tehai } from "./tehai/tehai";
import { Bakaze } from "./bakaze/bakaze";
import { Junme } from "./junme/junme";
import { Jikaze } from "./jikaze/jikaze";
import { Tsumo } from "./tsumo/tsumo";
import { Dora } from "./dora/dora";
import { SituationType } from "@/types/situation";

export const Situation = async ({ record }: { record: SituationType }) => {
  return (
    <div className="bg-[#29711a] p-5 flex flex-col gap-5">
      <div className="flex gap-3">
        <Bakaze bakaze={record?.bakaze ?? "東"}></Bakaze>
        <Junme junme={record?.junme ?? 1}></Junme>
        <Jikaze jikaze={record?.jikaze ?? "東"}></Jikaze>
      </div>

      <div className="flex gap-3">
        <Tsumo tsumo={record?.tsumo ?? ""}></Tsumo>
        <Dora dora={record?.dora ?? ""}></Dora>
      </div>

      <Tehai tehai={record?.tehai ?? []}></Tehai>
    </div>
  );
};

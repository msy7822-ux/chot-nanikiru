import { SituationType } from "@/types/situation";
import { Bakaze } from "../bakaze/bakaze";
import { Junme } from "../junme/junme";
import { Jikaze } from "../jikaze/jikaze";
import { Tehai } from "../tehai/tehai";
import { Tsumo } from "../tsumo/tsumo";
import { Dora } from "../dora/dora";

export const Contents = ({ situation }: { situation: SituationType }) => {
  return (
    <div className="py-5 flex flex-col gap-5">
      <div className="flex gap-5">
        <h1 className="md:text-xl font-bold text-white text-sm">【お題】</h1>
        <div className="flex gap-3">
          <Bakaze bakaze={situation?.bakaze ?? "東"}></Bakaze>
          <Junme junme={situation?.junme ?? 1}></Junme>
          <Jikaze jikaze={situation?.jikaze ?? "東"}></Jikaze>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Tehai tehai={situation?.tehai ?? []}></Tehai>
        <Tsumo tsumo={situation?.tsumo ?? ""}></Tsumo>
        <Dora dora={situation?.dora ?? ""}></Dora>
      </div>
    </div>
  );
};

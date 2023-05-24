import { PaiType } from "@/types/paiType";
import { Pai } from "../../pai/pai";

export const Tsumo = ({ tsumo }: { tsumo: string }) => {
  return (
    <div>
      <span className="text-white font-bold md:text-base text-sm">ツモ</span>
      <Pai type={tsumo as PaiType}></Pai>
    </div>
  );
};

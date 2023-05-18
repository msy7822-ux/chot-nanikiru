import { PaiType } from "@/types/paiType";
import { Pai } from "../../pai/pai";

export const Tsumo = ({ tsumo }: { tsumo: string }) => {
  return (
    <div>
      <Pai type={tsumo as PaiType}></Pai>
      <span className="text-white font-bold">ツモ</span>
    </div>
  );
};

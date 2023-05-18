import { PaiType } from "@/types/paiType";
import { Pai } from "../../pai/pai";

export const Dora = ({ dora }: { dora: string }) => {
  return (
    <div>
      <Pai type={dora as PaiType}></Pai>
      <span className="text-white font-bold">ドラ</span>
    </div>
  );
};

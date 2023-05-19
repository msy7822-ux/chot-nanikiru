import { PaiType } from "@/types/paiType";
import { Pai } from "../../pai/pai";

export const Dora = ({ dora }: { dora: string }) => {
  return (
    <div>
      <span className="text-white font-bold">ドラ</span>
      <Pai type={dora as PaiType}></Pai>
    </div>
  );
};

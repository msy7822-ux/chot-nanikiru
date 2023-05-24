import { PaiType } from "@/types/paiType";
import { Pai } from "../../pai/pai";

export const Dora = ({ dora }: { dora: string }) => {
  return (
    <div>
      <span className="text-white font-bold md:text-base text-sm">ドラ</span>
      <Pai type={dora as PaiType}></Pai>
    </div>
  );
};

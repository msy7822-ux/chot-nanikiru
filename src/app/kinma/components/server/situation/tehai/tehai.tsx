import { PaiType } from "@/types/paiType";
import { Pai } from "../../pai/pai";

export const Tehai = ({ tehai }: { tehai: string[] }) => {
  return (
    <div>
      <div className="text-white font-bold md:text-base text-sm">手牌</div>
      <div className="flex flex-wrap gap-2">
        {tehai.map((pai, i) => {
          return (
            <div key={i}>
              <Pai type={pai as PaiType}></Pai>
            </div>
          );
        })}
      </div>
    </div>
  );
};

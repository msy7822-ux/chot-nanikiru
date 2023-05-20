"use client";

import { PaiType } from "@/types/paiType";
import { Pai } from "../../server/pai/pai";
import { convertPaiName } from "@/utils/pai";

type Props = {
  id: number;
  pai: PaiType;
  select: (pai: PaiType, id: number) => void;
};

export const NonSelectPai = ({ id, pai, select }: Props) => {
  return (
    <button
      type="button"
      className="cursor-pointer text-center"
      onClick={() => select(pai, id)}
      key={id}
    >
      <div className="text-tiny text-white">{convertPaiName(pai)}</div>
      <div>
        <Pai type={pai}></Pai>
      </div>
    </button>
  );
};

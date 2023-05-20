"use client";

import { convertPaiName } from "@/utils/pai";
import { Pai } from "../../server/pai/pai";
import { PaiType } from "@/types/paiType";

type Props = {
  pai: PaiType;
};

export const SelectedPai = ({ pai }: Props) => {
  return (
    <div className="text-center">
      <div className="font-bold text-white">{convertPaiName(pai)}</div>
      <div className="border-4 border-red-300 rounded-[10px]">
        <Pai type={pai}></Pai>
      </div>
    </div>
  );
};

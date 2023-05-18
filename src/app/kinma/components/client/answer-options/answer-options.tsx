"use client";

import { PaiType } from "@/types/paiType";
import { Pai } from "../../server/pai/pai";
import { convertPaiName } from "@/utils/pai";
import { useState } from "react";

export const AnswerOptions = ({ tehai }: { tehai: PaiType[] }) => {
  const [selectPai, setSelectPai] = useState<PaiType | null>(null);

  const handleOnSelect = (pai: PaiType) => {
    setSelectPai(pai);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {tehai.map((pai, i) => {
          return (
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => handleOnSelect(pai)}
              key={i}
            >
              <div className="font-bold">{convertPaiName(pai)}</div>
              <div>
                <Pai type={pai}></Pai>
              </div>
            </button>
          );
        })}
      </div>

      {selectPai && (
        <div>
          <div>{convertPaiName(selectPai!)}</div>
          <div>
            <Pai type={selectPai!}></Pai>
          </div>
        </div>
      )}
    </div>
  );
};

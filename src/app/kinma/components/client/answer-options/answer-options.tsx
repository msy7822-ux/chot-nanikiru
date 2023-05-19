"use client";

import { PaiType } from "@/types/paiType";
import { Pai } from "../../server/pai/pai";
import { convertPaiName } from "@/utils/pai";
import { useState } from "react";
import { SubmitButton } from "../submit-button/submit-button";

export const AnswerOptions = ({ tehai }: { tehai: PaiType[] }) => {
  const [selectPai, setSelectPai] = useState<PaiType | null>(null);

  const handleOnSelect = (pai: PaiType) => {
    setSelectPai(pai);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-y-5 place-items-center">
        {tehai.map((pai, i) => {
          return (
            <button
              type="button"
              className="cursor-pointer text-center"
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

      <SubmitButton selectPai={selectPai}></SubmitButton>
    </div>
  );
};

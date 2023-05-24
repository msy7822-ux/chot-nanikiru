"use client";

import { PaiType } from "@/types/paiType";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SelectedPai } from "../selectable-pai/selected-pai";
import { NonSelectPai } from "../selectable-pai/non-select-pai";
import { SubmitButton } from "../submit-button/submit-button";

type SelectPaiType = { id: number; pai: PaiType } | null;
type Props = {
  isOpen: boolean;
  situationId: string;
  tehai: PaiType[];
  tsumo: PaiType;
  close: () => void;
};

export const AnswerModal = ({
  isOpen,
  tehai,
  close,
  tsumo,
  situationId,
}: Props) => {
  const [selectPai, setSelectPai] = useState<SelectPaiType>(null);
  const handleOnSelect = (pai: PaiType, id: number) => {
    setSelectPai({ id, pai });
  };

  if (!isOpen) return null;

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/[.95] flex flex-col gap-8">
        <div className="relative md:my-10 mt-5 mb-10 mx-8 md:p-10 p-5 max-w-[800px] overflow-scroll sm:mx-auto bg-[#29711a] rounded-md">
          <button
            type="button"
            onClick={() => close()}
            className="absolute top-5 right-5"
          >
            <IoCloseOutline color="#fff" size={30}></IoCloseOutline>
          </button>

          <p className="md:text-xl text-sm font-bold text-white mb-5">
            【牌を選択してください】
          </p>
          <div>
            <p className="text-white font-bold md:ml-5 mb-3 md:text-base text-sm">
              手牌
            </p>
            <div className="flex flex-wrap gap-2 md:gap-5 w-full mx-auto">
              {tehai.map((pai, i) => {
                return selectPai && selectPai.id === i ? (
                  <SelectedPai pai={pai}></SelectedPai>
                ) : (
                  <NonSelectPai
                    id={i}
                    pai={pai}
                    select={handleOnSelect}
                  ></NonSelectPai>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <p className="md:w-[75px] w-[45px] text-white font-bold text-center mb-3 md:text-base text-sm">
              ツモ
            </p>
            <div className="inline-block">
              {selectPai && selectPai.pai === tsumo && selectPai.id === 14 ? (
                <SelectedPai pai={tsumo}></SelectedPai>
              ) : (
                <NonSelectPai
                  id={14}
                  pai={tsumo}
                  select={handleOnSelect}
                ></NonSelectPai>
              )}
            </div>
          </div>

          <div className="mt-5 w-full mx-auto max-w-[200px]">
            <SubmitButton
              selectPai={selectPai?.pai!}
              situationId={situationId}
              close={close}
              clear={() => setSelectPai(null)}
            ></SubmitButton>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { PaiType } from "@/types/paiType";
import { useState } from "react";
import { OpenModalButton } from "../open-modal-button/open-modal-button";
import { AnswerModal } from "../answer-modal/answer-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ResultButton } from "../answer-modal/result-button";

type Props = {
  situationId: string;
  tehai: PaiType[];
  tsumo: PaiType;
  isDisplay: boolean;
};

export const AnswerOptions = ({
  tehai,
  isDisplay,
  tsumo,
  situationId,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (!isDisplay) return null;

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="w-full mx-auto max-w-[200px]">
        <OpenModalButton open={() => setIsOpenModal(true)}></OpenModalButton>
      </div>

      <AnswerModal
        situationId={situationId}
        isOpen={isOpenModal}
        tehai={tehai}
        tsumo={tsumo}
        close={() => setIsOpenModal(false)}
      ></AnswerModal>
    </div>
  );
};

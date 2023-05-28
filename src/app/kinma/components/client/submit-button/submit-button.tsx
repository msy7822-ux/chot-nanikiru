"use client";

import { PaiType } from "@/types/paiType";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createVote } from "@/app/actions/pai";

type Props = {
  selectPai: PaiType | null;
  situationId: string;
  close: () => void;
  clear: () => void;
};

export const SubmitButton = ({
  selectPai,
  close,
  clear,
  situationId,
}: Props) => {
  const notify = (text: string) => toast(text ?? "");
  const router = useRouter();

  const hamdleOnClick = async () => {
    if (!selectPai) return;

    try {
      await createVote(situationId, selectPai);

      notify("回答を送信しました");
      clear();
      close();

      // router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => hamdleOnClick()}
        disabled={!selectPai}
        className="py-2 px-6 border w-full border-gray-300 bg-white rounded-[6px] font-bold disabled:text-gray-400"
      >
        回答する
      </button>
    </>
  );
};

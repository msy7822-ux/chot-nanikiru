"use client";

import { PaiType } from "@/types/paiType";

export const SubmitButton = ({ selectPai }: { selectPai: PaiType | null }) => {
  const hamdleOnClick = async () => {
    if (!selectPai) return;

    await fetch("/api/nanikiru/answer", {
      body: JSON.stringify({
        situationId: "0c1c0792-b35a-4790-9672-8ac8a30f15a5",
        answer: selectPai,
      }),
      method: "POST",
    });
  };

  return (
    <button
      type="button"
      onClick={() => hamdleOnClick()}
      className="py-2 px-6 border border-gray-300 rounded-[6px]"
    >
      回答する
    </button>
  );
};

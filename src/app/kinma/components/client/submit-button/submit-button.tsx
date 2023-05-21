"use client";

import { PaiType } from "@/types/paiType";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  selectPai: PaiType | null;
  close: () => void;
  clear: () => void;
};

export const SubmitButton = ({ selectPai, close, clear }: Props) => {
  const notify = (text: string) => toast(text ?? "");
  const router = useRouter();

  const hamdleOnClick = async () => {
    if (!selectPai) return;

    try {
      await fetch("/api/nanikiru/answer", {
        body: JSON.stringify({
          situationId: "0c1c0792-b35a-4790-9672-8ac8a30f15a5",
          answer: selectPai,
        }),
        method: "POST",
      });

      notify("回答を送信しました");
      clear();
      close();

      // サーバーに再度リクエストを送信し、サーバコンポーネントを再レンダリングさせる(クライアントへの影響なし)
      router.refresh();
    } catch (error) {}
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

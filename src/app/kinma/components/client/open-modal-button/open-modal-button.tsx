"use client";

type Props = {
  open: () => void;
};

export const OpenModalButton = ({ open }: Props) => {
  return (
    <button
      type="button"
      onClick={() => open()}
      className="bg-[#29711a] font-bold text-white px-5 py-3 w-full rounded-md"
    >
      回答する
    </button>
  );
};

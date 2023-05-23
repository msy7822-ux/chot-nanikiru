"use clinet";

import { SlEye } from "react-icons/sl";

type Props = {
  open: () => void;
};

export const ResultButton = ({ open }: Props) => {
  return (
    <button
      type="button"
      className="mr-5 font-semibold text-gray-600 flex items-center gap-1 underline"
      onClick={() => open()}
    >
      <SlEye></SlEye>
      <span>みんなの回答結果をみる</span>
    </button>
  );
};

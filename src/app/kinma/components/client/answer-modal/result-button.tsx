"use clinet";

import { SlEye } from "react-icons/sl";

export const ResultButton = () => {
  return (
    <button
      type="button"
      className="mr-5 font-semibold text-gray-600 flex items-center gap-1 underline"
    >
      <SlEye></SlEye>
      <span>回答結果をみる</span>
    </button>
  );
};

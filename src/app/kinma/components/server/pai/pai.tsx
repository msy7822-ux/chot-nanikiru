import { PaiType } from "@/types/paiType";
import { PaImage } from "../../client/paImage/paImage";

export const Pai = ({ type }: { type: PaiType }) => {
  // j5は白なので画像なし
  if (type === "j5")
    return (
      <div className="shadow-lg bg-white border border-gray h-[100px] w-[75px] rounded-[6px]"></div>
    );

  return (
    <div className="shadow-lg bg-white border border-gray h-[100px] w-[75px] flex flex-col justify-center rounded-[6px]">
      <PaImage type={type}></PaImage>
    </div>
  );
};

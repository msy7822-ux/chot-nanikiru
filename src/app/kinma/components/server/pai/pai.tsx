import { PaiType } from "@/types/paiType";
import { PaImage } from "../../client/paImage/paImage";

export const Pai = ({ type }: { type: PaiType }) => {
  // j5は白なので画像なし
  if (type === "j5")
    return (
      <div className="shadow-lg bg-white border border-gray md:h-[100px] md:w-[75px] h-[70px] w-[45px] rounded-[6px]"></div>
    );

  return (
    <div className="shadow-lg bg-white border border-gray md:h-[100px] md:w-[75px] h-[70px] w-[45px] flex flex-col items-center justify-center rounded-[6px]">
      <PaImage
        type={type}
        className="md:h-[100px] md:w-[75px] h-[70px] w-[45px] mt-3"
      ></PaImage>
    </div>
  );
};

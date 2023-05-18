import { PaiType } from "@/types/paiType";
import * as paiJson from "../../public/pai.json";

export const convertPaiName = (pai: PaiType): string => {
  const type = pai.split("")[0];
  const number = pai.split("")[1];

  const name =
    type === "s"
      ? number + "索"
      : type === "m"
      ? number + "萬"
      : type === "p"
      ? number + "筒"
      : type === "j"
      ? paiJson[pai].value
      : "";

  return name as string;
};

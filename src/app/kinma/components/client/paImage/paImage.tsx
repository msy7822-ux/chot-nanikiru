"use client";

import Image from "next/image";
import type { PaiType } from "../../../../../types/paiType";

export const PaImage = ({ type }: { type: PaiType }) => {
  return (
    <div>
      <Image src={`/pais/${type}.png`} alt="" width={100} height={100} />
    </div>
  );
};

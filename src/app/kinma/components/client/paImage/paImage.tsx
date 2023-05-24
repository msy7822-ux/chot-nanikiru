"use client";

import Image from "next/image";
import type { PaiType } from "../../../../../types/paiType";

type Props = { type: PaiType; className?: string };

export const PaImage = ({ type, className = "" }: Props) => {
  return (
    <div className={className}>
      <Image src={`/pais/${type}.png`} alt="" width={100} height={100} />
    </div>
  );
};

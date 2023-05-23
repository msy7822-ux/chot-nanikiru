"use client";

import { PaiType } from "@/types/paiType";
import { Tehai } from "../../server/situation/tehai/tehai";
import { Tsumo } from "../../server/situation/tsumo/tsumo";
import { ResultButton } from "../answer-modal/result-button";
import { useState } from "react";
import { getVoteCount } from "@/utils/pai";

type Props = {
  votes: any;
  tehai: PaiType[];
  tsumo: PaiType;
};

export const Results = ({ votes, tehai, tsumo }: Props) => {
  const [isOpenResult, setIsOpenResult] = useState(false);

  const vote = getVoteCount(votes);

  return (
    <div>
      <div className="w-full flex justify-end">
        <ResultButton open={() => setIsOpenResult(true)}></ResultButton>
      </div>

      {isOpenResult && (
        <div className="flex flex-wrap gap-3">
          <Tehai tehai={tehai ?? []}></Tehai>
          <Tsumo tsumo={tsumo ?? ""}></Tsumo>
        </div>
      )}
    </div>
  );
};

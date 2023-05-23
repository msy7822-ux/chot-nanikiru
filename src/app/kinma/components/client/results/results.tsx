"use client";

import { PaiType } from "@/types/paiType";
import { ResultButton } from "../answer-modal/result-button";
import { Suspense, useState } from "react";
import { Votes } from "./votes/votes";
import { Loading } from "./votes/loading";

type Props = {
  votes: any;
  tehai: PaiType[];
  tsumo: PaiType;
};

export const Results = ({ votes, tehai, tsumo }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="w-full flex justify-end">
        <ResultButton open={() => setIsLoading(true)}></ResultButton>
      </div>
      <div className="px-10 py-5">
        <Suspense fallback={<Loading></Loading>}>
          <Votes
            votes={votes}
            tehai={tehai}
            tsumo={tsumo}
            isLoading={isLoading}
            finish={() => setIsLoading(false)}
          ></Votes>
        </Suspense>
      </div>
    </div>
  );
};

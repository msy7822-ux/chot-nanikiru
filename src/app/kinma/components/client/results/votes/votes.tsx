import { PaiType } from "@/types/paiType";
import { Pai } from "../../../server/pai/pai";
import { convertPaiName, getVoteCount } from "@/utils/pai";
import { useEffect, useState } from "react";

type Props = {
  votes: any;
  tehai: PaiType[];
  tsumo: PaiType;
  isLoading: boolean;
  finish: () => void;
};

function sleep(
  ms: number,
  isOpen: boolean,
  open: () => void,
  finish: () => void
) {
  const promise = new Promise((resolve) => setTimeout(resolve, ms));

  if (isOpen) {
    finish();
    return;
  } else {
    // ms経過後にisOpenをtrueにする
    throw promise.then(() => open());
  }
}

export const Votes = ({ votes, tehai, tsumo, isLoading, finish }: Props) => {
  const [isOpenResult, setIsOpenResult] = useState(false);

  const vote = getVoteCount(votes);

  if (isLoading)
    sleep(
      2000,
      isOpenResult,
      () => setIsOpenResult(true),
      () => finish()
    );

  if (!isOpenResult) return null;

  return (
    <div className=" max-w-[800px] w-full mx-auto">
      <h2 className="text-xl font-bold">【みんなの投票結果】</h2>
      <div className="flex flex-wrap gap-3">
        {[...tehai, tsumo].map((pai, i) => (
          <div key={i} className="flex flex-col gap-3 items-center">
            <div className="text-tiny text-white">{convertPaiName(pai)}</div>
            <div>
              <Pai type={pai}></Pai>
            </div>
            <p className="font-semibold text-sm">{vote[`${pai}`] ?? 0}票</p>
          </div>
        ))}
      </div>
    </div>
  );
};

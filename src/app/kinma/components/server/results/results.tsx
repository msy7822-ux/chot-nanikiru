import { PaiType } from "@/types/paiType";

type Props = {
  votes: any;
  tehai: PaiType[];
  tsumo: PaiType;
};

export const Results = async ({ votes, tehai, tsumo }: Props) => {
  console.log(votes);

  return (
    <div>
      <div></div>
    </div>
  );
};

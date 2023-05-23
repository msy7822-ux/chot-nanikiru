import { SituationType } from "@/types/situation";
import { Contents } from "../../situation/contents/contents";
import Link from "next/link";
import { format } from "@/libs/date";

type Props = {
  situation: SituationType;
};

export const SituationItem = ({ situation }: Props) => {
  return (
    <Link href={`/kinma/${situation.id}`}>
      <div className="bg-[#29711a] rounded-[6px] p-4">
        <p className="text-white font-bold">{format(situation.created_at)}</p>
        <Contents situation={situation}></Contents>
      </div>
    </Link>
  );
};

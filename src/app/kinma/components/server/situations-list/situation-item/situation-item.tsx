import { SituationType } from "@/types/situation";
import { Contents } from "../../situation/contents/contents";
import Link from "next/link";

type Props = {
  situation: SituationType;
};

export const SituationItem = ({ situation }: Props) => {
  return (
    <Link href={`/kinma/${situation.id}`}>
      <div className="bg-[#29711a] rounded-[6px] p-4">
        <Contents situation={situation}></Contents>
      </div>
    </Link>
  );
};

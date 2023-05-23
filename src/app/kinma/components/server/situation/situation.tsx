import { SituationType } from "@/types/situation";
import { Contents } from "./contents/contents";

export const Situation = async ({ record }: { record: SituationType }) => {
  return (
    <div className="bg-[#29711a] p-5 rounded-[0 6px 0 6px]">
      <Contents situation={record}></Contents>
    </div>
  );
};

import { SituationType } from "@/types/situation";
import { SituationItem } from "./situation-item/situation-item";

type Props = {
  situations: SituationType[];
};

export const SituationsList = ({ situations }: Props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {situations.map((situation, i) => (
        <div key={i}>
          <SituationItem situation={situation}></SituationItem>
        </div>
      ))}
    </div>
  );
};

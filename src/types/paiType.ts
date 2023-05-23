export type SuPaiType = `${"s" | "m" | "p"}${
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9}`;
export type JiPaiType = `j${1 | 2 | 3 | 4 | 5 | 6 | 7}`;

export type PaiType = SuPaiType | JiPaiType;

export type paiVoteType = {
  answer: PaiType;
  rate: number;
};

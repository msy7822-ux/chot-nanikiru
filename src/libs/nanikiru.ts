import { PromptExecuter } from "simple-prompt-executer";

const prompt = {
  prompt: `麻雀のシチュエーションを作成してください。`,
  exampleDescription: "麻雀のシチュエーションです",
  response: {
    junme: {
      example: "5巡目",
      description: "麻雀の巡目",
    },
    bakaze: {
      example: "南",
      description: "麻雀の場風",
    },
    jikaze: {
      example: "東",
      description: "麻雀の自風",
    },
    dora: {
      example: "m5",
      description:
        "麻雀のドラ牌です。sが索、mが萬、pが筒です。またj1から東、j2から南、j3から西、j4から北です。j5は白、j6は發、j7は中です。",
    },
    isParent: {
      example: "true",
      description: "麻雀の親かどうか",
    },
    tehai: {
      example: [
        "s1",
        "s2",
        "s2",
        "s3",
        "s4",
        "s5",
        "m6",
        "m7",
        "m8",
        "p9",
        "p9",
        "p9",
        "j2",
        "j3",
      ],
      description:
        "手牌です。必ず13個の牌になるようにしてください。一つは白(j5)を出してください。例は分かりやすくしてますが、ランダム性を持たせてください。sが索、mが萬、pが筒です。またj1から東、j2から南、j3から西、j4から北です。j5は白、j6は發、j7は中です。",
    },
    tsumo: {
      example: "s1",
      description:
        "ツモ牌です。sが索、mが萬、pが筒です。またj1から東、j2から南、j3から西、j4から北です。j5は白、j6は發、j7は中です。",
    },
  },
};

const executer = new PromptExecuter({
  openAiApiKey: process.env.OPENAI_API_KEY ?? "",
});

export const createChatCompletion = async () => {
  return await executer.execute(prompt);
};

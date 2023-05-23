import { supabase } from "@/libs/supabase";
import { Header } from "./kinma/components/server/layouts/header/header";
import { SituationsList } from "./kinma/components/server/situations-list/situations-list";

export default async function Home() {
  const { data: situations } = await supabase.from("situations").select("*");
  console.log(situations);

  return (
    <main className="relative max-w-[800px] w-full mx-auto py-24 px-5">
      <Header></Header>
      <h2 className="text-xl font-bold mb-5 text-[#29711a]">
        【過去の何切る問題集】
      </h2>
      <SituationsList situations={situations ?? []}></SituationsList>
    </main>
  );
}

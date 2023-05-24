import { Header } from "./kinma/components/server/layouts/header/header";
import { SituationsList } from "./kinma/components/server/situations-list/situations-list";
import { Suspense } from "react";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="bg-[url(/majan-back..jpeg)] bg-center bg-no-repeat bg-cover">
      <div className="relative max-w-[800px] w-full mx-auto py-24 px-5 ">
        <Header></Header>
        <h2 className="text-xl font-bold mb-5 text-[#29711a]">
          【過去の何切る問題集】
        </h2>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <SituationsList></SituationsList>
        </Suspense>
      </div>
    </main>
  );
}

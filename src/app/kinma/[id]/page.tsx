import { Suspense } from "react";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { Nanikiru } from "../components/server/nanikiru/nanikiru";
import { Header } from "../components/server/layouts/header/header";

export type PageProps = {
  params: { id: string };
  searchParams: ReadonlyURLSearchParams & {
    location: string;
  };
};

export const revalidate = 0;

const KinmaPage = async ({ params }: PageProps) => {
  const situationId = params.id;

  return (
    <div>
      <Header></Header>
      <div className="mt-[56px]">
        <Suspense fallback={<></>}>
          {/* @ts-expect-error Server Component */}
          <Nanikiru situationId={situationId}></Nanikiru>
        </Suspense>
      </div>
    </div>
  );
};

export default KinmaPage;

import { Suspense } from "react";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { Nanikiru } from "../components/server/nanikiru/nanikiru";
import Layout from "../../layout";
import { Header } from "../components/server/layouts/header/header";

export const metadata = {
  title: "chot kinma",
  description: "This is New Tab Override Page",
};

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
    <Layout>
      <Header></Header>
      <div className="mt-[56px]">
        <Suspense fallback={<></>}>
          {/* @ts-expect-error Server Component */}
          <Nanikiru situationId={situationId}></Nanikiru>
        </Suspense>
      </div>
    </Layout>
  );
};

export default KinmaPage;

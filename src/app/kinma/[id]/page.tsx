import { Suspense } from "react";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { Nanikiru } from "../components/server/nanikiru/nanikiru";
import Layout from "../../layout";

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

const KinmaPage = async ({ params }: PageProps) => {
  const situationId = params.id;

  return (
    <Layout>
      <Suspense fallback={<></>}>
        {/* @ts-expect-error Server Component */}
        <Nanikiru situationId={situationId}></Nanikiru>
      </Suspense>
    </Layout>
  );
};

export default KinmaPage;

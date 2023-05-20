import { Suspense } from "react";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { Nanikiru } from "./components/server/nanikiru/nanikiru";
import Layout from "../layout";

export const metadata = {
  title: "New Tab",
  description: "This is New Tab Override Page",
};

export type PageProps = {
  params: {};
  searchParams: ReadonlyURLSearchParams & {
    location: string;
  };
};

const KinmaPage = async (_pageProps: PageProps) => {
  return (
    <Layout>
      <div className="">
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Nanikiru></Nanikiru>
        </Suspense>
      </div>
    </Layout>
  );
};

export default KinmaPage;

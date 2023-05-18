import { Suspense } from "react";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { Nanikiru } from "./components/server/nanikiru/nanikiru";

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
    <div>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Nanikiru></Nanikiru>
      </Suspense>
    </div>
  );
};

export default KinmaPage;

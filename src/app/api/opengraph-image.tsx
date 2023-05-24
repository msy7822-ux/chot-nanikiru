import { supabase } from "@/libs/supabase";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  console.log("searchParams is ", params);
  // const { data: latestRecord } = await supabase
  //   .from("situations")
  //   .select("*")
  //   .order()
  //   .single();

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}

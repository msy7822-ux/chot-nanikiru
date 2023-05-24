import { supabase } from "@/libs/supabase";
import { NextRequest, ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image(_req: NextRequest) {
  const { data: situation } = await supabase
    .from("situations")
    .select("*")
    .limit(1)
    .single();

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#29711a",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {situation &&
            situation.tehai.map((pai) => (
              <>
                <div
                  style={{
                    background: "white",
                    display: "flex",
                    borderRadius: "6px",
                    height: "100px",
                    width: "75px",
                    justifyContent: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://chot-nanikiru.vercel.app/pais/${pai}.png`}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </>
            ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}

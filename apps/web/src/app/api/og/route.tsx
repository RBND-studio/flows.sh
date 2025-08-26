import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";
import { type JSX } from "react";
import { Logo } from "ui";

async function loadGoogleFont(text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Figtree:wght@750&text=${encodeURIComponent(text)}`;
  const fontCss = await fetch(url).then((res) => res.text());
  // eslint-disable-next-line prefer-named-capture-group -- next magic
  const resource = /src: url\((.+)\) format\('(opentype|truetype)'\)/.exec(fontCss);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(request: Request): Promise<ImageResponse> {
  try {
    const { searchParams } = new URL(request.url);

    const backgroundData = await readFile(
      join(process.cwd(), "src/app/api/og/og-bg.png"),
      "base64",
    );
    const backgroundSrc = `data:image/png;base64,${backgroundData}`;

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "My default title";

    // ?type=<type>
    const hasType = searchParams.has("type");
    const type = hasType ? searchParams.get("type")?.slice(0, 100) : undefined;

    const textToFetch = [title, type].filter(Boolean).join(" ");

    return new ImageResponse(
      (
        <OgComponent
          title={title ?? "The better way to build product adoption"}
          backgroundSrc={backgroundSrc}
          type={type}
        />
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Figtree",
            data: await loadGoogleFont(textToFetch),
            style: "normal",
          },
        ],
      },
    );
  } catch (e: unknown) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

type OgComponentProps = {
  title: string;
  type?: string;
  backgroundSrc: string;
};

const OgComponent = ({ title, type, backgroundSrc }: OgComponentProps): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        fontFamily: "Figtree",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- not here */}
      <img
        src={backgroundSrc}
        height="100%"
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit: "cover",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          padding: "88px 80px 300px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Logo
            aria-label="Flows logo"
            type="type"
            style={{
              height: "32px",
              width: "150px",
              color: "#DFE3E8",
            }}
          />
          {type ? (
            // Unfortunately fragment doesn't work here
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "24px",
                  width: "1px",
                  backgroundColor: "#6B7280",
                }}
              />

              <div
                style={{
                  fontSize: "32px",
                  color: "#F9FAFC",
                  lineHeight: "32px",
                  fontFamily: '"Figtree"',
                  whiteSpace: "pre-wrap",
                }}
              >
                {type}
              </div>
            </div>
          ) : null}
        </div>
        <div
          style={{
            fontSize: "64px",
            color: "#F9FAFC",
            lineHeight: "62px",
            fontFamily: '"Figtree"',
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

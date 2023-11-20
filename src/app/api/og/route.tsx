import siteMetadata from "@/shared/settings/sitemetdata";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import formatDate from "@/shared/utils/format-date";
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const cover = searchParams.get("cover");
  const category = searchParams.get("category");
  const createdAt = searchParams.get("createdat");
  const categoryColor = searchParams.get("categorycolor");
  console.log({
    xd: "",
    title,
    cover,
    category,
    categoryColor,
    createdAt,
  });
  return new ImageResponse(
    (
      <div
        style={{
          color: "white",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",

          borderRadius: "1.5rem",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",

          width: "680px",
          height: "357px",
          backgroundImage:
            "url(https://res.cloudinary.com/ddksrkond/image/upload/v1700444328/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_1_lrshjz.png)",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            width: "85%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <p style={{ fontSize: "0.75rem" }}>{category}</p>
            <p>&middot;</p>
            <p style={{ fontSize: "0.75rem" }}>{createdAt}</p>
          </div>
          <h1
            style={{ fontSize: "30px", paddingRight: "1.5rem", width: "100%" }}
          >
            {title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                filter: "invert(0)",
                objectFit: "contain",
              }}
              src={siteMetadata.avatarImage}
              width={25}
              height={25}
              alt={siteMetadata.author}
            />
            <p style={{ margin: "0", fontSize: "0.75rem" }}>
              Por {siteMetadata.author}
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    objectFit: "contain",
                    filter: "invert(0)",
                  }}
                  src="https://res.cloudinary.com/ddksrkond/image/upload/v1699381028/ChatGPT-Logo_xghvfd.png"
                  alt=""
                />{" "}
                Revisado{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <picture>
            <img
              width={300}
              height={160}
              src={cover}
              style={{
                objectFit: "contain",
                borderRadius: "1rem",
                transform: "scale(1.05)",
              }}
              alt={title}
            />
          </picture>
        </div>
      </div>
    ),
    {
      width: 680,
      height: 357,
    }
  );
}

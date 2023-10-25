import { ImageResponse, NextRequest } from "next/server";
 
export const runtime = "edge";
 
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          // more styles here...
          backgroundImage: "url(https://res.cloudinary.com/djzt16xpp/image/upload/v1698246071/Negro_Morado_y_Cian_Ne%C3%B3n_Noir_Deportes_Vaporwave_YouTube_Banner_s5o5bd.png)",
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
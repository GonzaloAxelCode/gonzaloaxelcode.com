import { db } from "@/shared/settings/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const { searchParams } = req.nextUrl;
  const postId = searchParams.get("postId");

  const getViews = async (postId: any) => {
    const counterRef = doc(db, "counters", postId);
    const docSnapshot = await getDoc(counterRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data().count;
    } else {
      // Si el documento no existe, el artículo no tiene vistas aún.
      return 0;
    }
  };

  const views = await getViews(postId); // Llamada a la función para obtener las vistas
  
  return NextResponse.json({ views });
}
































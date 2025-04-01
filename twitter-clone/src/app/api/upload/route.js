import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData(); // Obtém o FormData da requisição
    const file = formData.get("file"); // Obtém o arquivo enviado

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    // Simula um processo de upload (substitua pela API real)
    const imageUrl = `https://fakeimageupload.com/${file.name}`;

    return NextResponse.json({ imageUrl }, { status: 200 });
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return NextResponse.json({ error: "Erro ao fazer upload da imagem" }, { status: 500 });
  }
}

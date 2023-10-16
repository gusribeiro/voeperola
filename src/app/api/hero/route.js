import { NextResponse } from "next/server";

import { glob } from "glob";

export async function GET() {
  try {
    const heroFiles = await glob("./public/images/hero/*");
    const randomIndex = Math.floor(Math.random() * heroFiles.length);
    const randomHero = encodeURI(heroFiles[randomIndex].replace("public", ""));

    return new NextResponse(JSON.stringify({ hero: randomHero }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }));
  }
}

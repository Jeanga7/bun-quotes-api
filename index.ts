import { writeFileSync } from "fs";
import { join } from "path";
import quotes from "./quotes.json";

const quotesPath = "./quotes.json";

export default {
  port: 3000,
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (request.method === "GET" && pathname === "/quote") {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      return Response.json({ quote: random });
    }

    if (request.method === "GET" && pathname === "/quotes") {
      return Response.json({ quotes });
    }

    if (request.method === "POST" && pathname === "/quote") {
      try {
        const body = await request.json() as { quote: string };
        const newQuote = body.quote?.trim();

        if (!newQuote) {
          return new Response("Quote is required", { status: 400 });
        }

        quotes.push(newQuote);
        writeFileSync(quotesPath, JSON.stringify(quotes, null, 2));

        return Response.json({ message: "Quote added successfully", quote: newQuote });
      } catch (err) {
        return new Response("Invalid JSON", { status: 400 });
      }
    }

    // 🧾 Sert les fichiers statiques depuis /public
    const publicDir = join(import.meta.dir, "public");
    // Sécurise l'accès pour éviter de remonter dans l'arborescence
    const safePathname = pathname.replace(/^(\.\.[\/\\])+/, "");
    const filePath = join(publicDir, safePathname === "/" ? "index.html" : safePathname.slice(1));

    const file = Bun.file(filePath);
    if (await file.exists()) {
      // Bun gère le Content-Type automatiquement super non :) !!
      return new Response(file);
    }

    return new Response("Not found", { status: 404 });
  },
};

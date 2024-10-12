// handlers.ts
import { http } from "msw";

const LOCAL_STORAGE_KEY = "documents_data";

interface Document {
  id: string;
  title: string;
  content: string;
}

export const handlers = [
  // Handler for GET request
  // @ts-ignore
  http.get("/api/documents", (req, res, ctx) => {
    const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    const data: Document[] = dataString ? JSON.parse(dataString) : [];
    return res(ctx.status(200), ctx.json(data));
  }),

  // Handler for POST request
  // @ts-ignore
  http.post("/api/documents", async (req, res, ctx) => {
    const newDocument = await req.json(); // Ensure req.body is parsed correctly
    const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    const data: Document[] = dataString ? JSON.parse(dataString) : [];
    data.push(newDocument);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    
    return res(
      ctx.status(201),
      ctx.json({ message: "Document added successfully" })
    );
  }),
];

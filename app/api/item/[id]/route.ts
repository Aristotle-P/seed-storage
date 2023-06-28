import { db } from "@/db";
import { items } from "@/src/db/schema";
import { eq } from "drizzle-orm";
// export async function GET(request: Request) {}

// export async function POST(request: Request) {}

// export async function PUT(request: Request) // 
export async function DELETE(request: Request, context: { params: any }) {
  try {
    await db.delete(items).where(eq(items.id, context.params.id));
    return new Response("Success", { status: 200 });
  } catch (e) {
    return new Response("An error occurred, please try again later", { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: any }) {
  const req = await request.json();
  try {
    const updatedItem: { updatedTitle: string }[] = await db.update(items)
      .set({ title: req.title })
      .where(eq(items.id, context.params.id))
      .returning({ updatedTitle: items.title });
    return new Response(JSON.stringify(updatedItem), { status: 200 });
  } catch (e) {
    return new Response("Failed to edit group, please try again later", { status: 500 });
  }
}

import { db } from "@/db";
import { groups } from "@/src/db/schema";
import { eq } from "drizzle-orm";
export async function DELETE(request: Request, context: { params: any }) {
  try {
    await db.delete(groups).where(eq(groups.id, context.params.id));
    return new Response("Success", { status: 200 });
  } catch (e) {
    return new Response("Failed to delete group, please try again later", { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: any }) {
  const req = await request.json();
  try {
    const updatedGroup: { updatedTitle: string }[] = await db.update(groups)
      .set({ title: req.title })
      .where(eq(groups.id, context.params.id))
      .returning({ updatedTitle: groups.title });
    return new Response(JSON.stringify(updatedGroup), { status: 200 });
  } catch (e) {
    return new Response("Failed to edit group, please try again later", { status: 500 });
  }
}

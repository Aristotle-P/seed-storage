import { db } from "@/db";
import { groups } from "@/src/db/schema";
import { eq } from "drizzle-orm";
// export async function GET(request: Request) {}

// export async function POST(request: Request) {}

// export async function PUT(request: Request) // 
export async function DELETE(request: Request, context: { params: any }) {
  try {
    await db.delete(groups).where(eq(groups.id, context.params.id));
    return new Response("Success", { status: 200 });
  } catch (e) {
    return new Response("An error occurred, please try again later", { status: 500 });
  }
}

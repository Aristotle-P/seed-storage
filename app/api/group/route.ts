import { db } from "@/db";

export const GET = async () => {
  try {
    const data = await db.query.groups.findMany({
      with: {
        items: true,
      },
    });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch groups", { status: 500 });
  }
}

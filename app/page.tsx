import { db } from "@/db"
import { Group } from "@/components/Group";
import Link from "next/link"
import { items } from "@/src/db/schema";
import { eq } from "drizzle-orm";

function getGroups() {
  const data = db.query.groups.findMany({
    with: {
      items: true,
    },
  });
  return data;
};

async function deleteItem(id: number) {
  "use server"

  await db.delete(items).where(eq(items.id, id));
  console.log('deleting item with id of', id);
}

export default async function Home() {
  const groups = await getGroups();
  console.log('Your groups are...', groups);
  console.log('Your items are...', groups[0].items);
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Seeds</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/category"
        >
          Add Category
        </Link>
      </header>
      <ul className="pl-4">
        {groups.map(group => (
          <Group key={group.id} {...group} deleteItem={deleteItem} />
        ))}
      </ul>
    </>
  )
}

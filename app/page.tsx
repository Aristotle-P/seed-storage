import { Group } from "@/components/Group"
import { prisma } from "@/db"
import Link from "next/link"

function getGroups() {
  return prisma.group.findMany({
    include: {
      items: true,
    },
  })
}

export default async function Home() {
  const groups = await getGroups()
  console.log(groups[0].items);
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
          <Group key={group.id} {...group} />
        ))}
      </ul>
    </>
  )
}

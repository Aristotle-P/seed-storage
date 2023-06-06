import { Item } from "@/components/Item"
import { prisma } from "@/db"
import Link from "next/link"

function getItems() {
  return prisma.item.findMany()
}

export default async function Home() {
  const items = await getItems()
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Seeds</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          Add
        </Link>
      </header>
      <ul className="pl-4">
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </>
  )
}

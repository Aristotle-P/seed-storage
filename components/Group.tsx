import { Item } from "@/components/Item"
import { prisma } from "@/db"
import Link from "next/link"

type GroupProps = {
  id: string
  title: string
  items: {
    id: string
    name: string
    groupId: string
    createdAt: Date
    updatedAt: Date
  }[]
async function deleteItem(id: string) {
  "use server"

  await prisma.item.delete({
    where: {
      id: id
    }
  })
}

export function Group({ title, items, id }: GroupProps) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-2xl">{title}</h3>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href={{
            pathname: "/item",
            query: { group: id }
          }}
        >
          Add Item
        </Link>
      </header>
      <ul>
        {items.map((item: any) => (
          <Item key={item.id} {...item} deleteItem={deleteItem} />
        ))}
      </ul>
    </>
  )
}

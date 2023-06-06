import { Item } from "@/components/Item"
import Link from "next/link"

type GroupProps = {
  id: string
  title: string
  items: typeof Item[]
  createdAt: Date
  updatedAt: Date
  key: string
}

export function Group({ title, items }: GroupProps) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-2xl">{title}</h3>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/item"
        >
          Add Item
        </Link>
      </header>
      <ul>
        {items.map((item: any) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </>
  )
}

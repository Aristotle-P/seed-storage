"use client"
import { Item } from "@/components/Item"
import Link from "next/link"
import { useState } from "react"

type GroupProps = {
  id: number
  title: string
  key: number
  items: {
    id: number
    title: string
    groupId: number
  }[]
  deleteItem: (id: number) => void
}

export function Group({ title, id, items, deleteItem }: GroupProps) {
  const [itemList, setItemList] = useState(items);

  const handleDeleteState = (id: number) => {
    const newItemList = itemList.filter(item => item.id !== id);
    setItemList(newItemList);
  }
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
        {itemList.map(item => (
          <Item key={item.id} {...item} deleteItem={deleteItem} handleDeleteState={handleDeleteState} />
        ))}
      </ul>
    </>
  )
}

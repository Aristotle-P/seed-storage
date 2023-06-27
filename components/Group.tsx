import { Item } from "@/components/Item"
import Link from "next/link"
import { useState } from "react"

import { FaTrashAlt } from 'react-icons/fa';

type GroupProps = {
  id: number
  title: string
  key: number
  items: {
    id: number
    title: string
    groupId: number
  }[]
  deleteGroup: (id: number) => void
}


export function Group({ title, id, items, deleteGroup }: GroupProps) {
  const [itemList, setItemList] = useState(items);

  const deleteItem = async (id: number) => {
    await fetch(`/api/item/${id}`, {
      method: "DELETE",
    });
    const newItemList = itemList.filter(item => item.id !== id);
    console.log(newItemList);
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
        {items.map(item => (
          <Item key={item.id} {...item} deleteItem={deleteItem} />
        ))}
      </ul>
      <button onClick={() => {
        deleteGroup(id);
      }}>
        <FaTrashAlt />
      </button>
    </>
  )
}

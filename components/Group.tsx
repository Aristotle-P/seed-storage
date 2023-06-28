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
  updateGroup: (title: string, id: number) => void
}


export function Group({ title, id, items, deleteGroup, updateGroup }: GroupProps) {
  const [itemList, setItemList] = useState(items);
  const [edit, setEdit] = useState(false);

  const deleteItem = async (id: number) => {
    const newItemList = itemList.filter(item => item.id !== id);
    setItemList(newItemList);
    await fetch(`/api/item/${id}`, {
      method: "DELETE",
    });
  }

  const updateItem = async (title: string, id: number) => {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid Title")
    }
    const data = { title, id }
    const newItems = itemList.map(item => {
      if (item.id !== id) return item;
      item.title = title;
      return item;
    })
    setItemList(newItems);
    await fetch(`/api/item/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  const handleEdit = (e: any) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      updateGroup(e.target.value, id);
      setEdit(false);
    }
  }
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        {edit ? (
          <form className="flex gap-2 flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              autoFocus
              defaultValue={title}
              className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
              onKeyDown={handleEdit}
            />
          </form>
        ) : (
          <h3 className="text-2xl" onClick={() => {
            setEdit(true);
          }}>{title}
            <button onClick={() => {
              deleteGroup(id);
            }}>
              <FaTrashAlt />
            </button>
          </h3>
        )
        }
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
          <Item key={item.id} {...item} deleteItem={deleteItem} updateItem={updateItem} />
        ))}
      </ul>
    </>
  )
}

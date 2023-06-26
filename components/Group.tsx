import { Item } from "@/components/Item"
import Link from "next/link"
// import { useState } from "react"
import { items } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db"

import { FaTrashAlt } from 'react-icons/fa';

type GroupProps = {
  id: number
  title: string
  key: number
  groupItems: {
    id: number
    title: string
    groupId: number
  }[]
}


export function Group({ title, id, groupItems }: GroupProps) {
  // const [itemList, setItemList] = useState(groupItems);

  // const deleteItem = async (id: number) => {
  //   await db.delete(items).where(eq(items.id, id));
  //   const newItemList = itemList.filter(item => item.id !== id);
  //   setItemList(newItemList);
  //   console.log('deleting item with id of', id);
  // }

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
        {groupItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
      {/*   <button onClick={() => { */}
      {/*     deleteGroup(id); */}
      {/*   }}> */}
      {/*     <FaTrashAlt /> */}
      {/*   </button> */}
    </>
  )
}

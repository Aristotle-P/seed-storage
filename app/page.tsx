"use client"
import { Group } from "@/components/Group";
import { useEffect, useState } from "react";
import Link from "next/link"


export default async function Home() {
  // const [groupData, setGroupData] = useState<any[]>([]);
  // useEffect(() => {
  //   const getGroups = async () => {
  //     const res = await fetch("/api/group", {
  //       method: "GET",
  //     })
  //     const data = await res.json();
  //     setGroupData(data);
  //   };
  //   getGroups();
  // }, []);
  //
  // const deleteGroup = async (id: number) => {
  //   await fetch(`/api/group/${id}`, {
  //     method: "DELETE",
  //   });
  //   // const newGroupData = groupData.filter(item => item.id !== id);
  //   // setGroupData(newGroupData);
  //   // console.log('deleting item with id of', id);
  // }
  //

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
      <p>Goodbye World</p>
      <ul className="pl-4">
        {/* {groupData.map(group => ( */}
        {/*   <Group key={group.id} id={group.id} title={group.title} groupItems={group.items} /> */}
        {/* ))} */}
      </ul>
      <button onClick={() => {
        // deleteGroup(1);
        console.log('click :)')
      }}>
        I delete group 1
      </button>
    </>
  )
}

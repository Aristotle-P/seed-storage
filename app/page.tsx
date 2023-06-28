"use client"
import { Group } from "@/components/Group";
import { useEffect, useState } from "react";
import Link from "next/link"

type GroupType = {
  id: number
  title: string
  key: number
  items: {
    id: number
    title: string
    groupId: number
  }[]
}[]

export default function Home() {
  const [groups, setGroups] = useState<GroupType>([]);

  useEffect(() => {
    const getGroups = async () => {
      const res = await fetch("/api/group", {
        method: "GET",
      })
      const data = await res.json();
      setGroups(data);
    };
    getGroups();
  }, []);

  const deleteGroup = async (id: number) => {
    const newGroups = groups.filter(item => item.id !== id);
    setGroups(newGroups);
    await fetch(`/api/group/${id}`, {
      method: "DELETE",
    });
  }

  const updateGroup = async (title: string, id: number) => {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid Title")
    }
    const data = { title, id }
    const newGroups = groups.map(group => {
      if (group.id !== id) return group;
      group.title = title;
      return group;
    })
    setGroups(newGroups);
    await fetch(`/api/group/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Seeds</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/group"
        >
          Add Group
        </Link>
      </header>
      <ul className="pl-4">
        {groups.map(group => (
          <Group key={group.id} id={group.id} title={group.title} items={group.items} deleteGroup={deleteGroup} updateGroup={updateGroup} />
        ))}
      </ul>
    </>
  )
}

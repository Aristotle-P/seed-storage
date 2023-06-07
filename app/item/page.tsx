import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createItem(data: FormData) {
  "use server"

  const name = data.get("name")?.valueOf()
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid Title")
  }

  const groupId = data.get("groupId")?.valueOf()
  if (typeof groupId !== "string" || groupId.length === 0) {
    throw new Error("Invalid Group")
  }

  await prisma.item.create({ data: { name, groupId } })

  redirect("/")
}

type SearchParams = {
  searchParams: {
    group: string
  }
}

export default function Page({ searchParams }: SearchParams) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Add new item</h1>
      </header>
      <form action={createItem} className="flex gap-2 flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="groupId"
          defaultValue={searchParams.group}
          style={{ visibility: "hidden" }}
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}

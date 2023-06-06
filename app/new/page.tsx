import { prisma } from "../../db.ts"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createGroup(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  await prisma.group.create({ data: { title } })

  redirect("/")
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Add new item</h1>
      </header>
      <form action={createGroup} className="flex gap-2 flex-col">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
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

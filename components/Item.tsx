import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

type ItemProps = {
  id: number
  title: string
  deleteItem: (id: number) => void
  updateItem: (title: string, id: number) => void
}

export function Item({ title, id, deleteItem, updateItem }: ItemProps) {
  const [edit, setEdit] = useState(false);

  const handleEdit = (e: any) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      updateItem(e.target.value, id);
      setEdit(false);
    }
  }

  return (
    <li className="flex gap-1 items-center">
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
        }}>{title}</h3>
      )
      }
      <button onClick={() => {
        deleteItem(id);
      }}>
        <FaTrashAlt />
      </button>
    </li>
  )
}

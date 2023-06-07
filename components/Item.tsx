"use client"

import { FaTrashAlt } from 'react-icons/fa';

type ItemProps = {
  id: string
  name: string
  deleteItem: (id: string) => void
}

export function Item({ name, deleteItem, id }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {name}
      <button onClick={e => deleteItem(id)}>
        <FaTrashAlt />
      </button>
    </li>
  )
}

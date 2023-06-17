"use client"

import { FaTrashAlt } from 'react-icons/fa';

type ItemProps = {
  id: string
  name: string
  deleteItem: (id: string) => void
  handleDeleteState: (id: string) => void
}

export function Item({ name, id, deleteItem, handleDeleteState }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {name}
      <button onClick={e => {
        deleteItem(id);
        handleDeleteState(id);
      }}>
        <FaTrashAlt />
      </button>
    </li>
  )
}

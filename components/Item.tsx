"use client"

import { FaTrashAlt } from 'react-icons/fa';

type ItemProps = {
  id: number
  title: string
  deleteItem: (id: number) => void
  handleDeleteState: (id: number) => void
}

export function Item({ title, id, deleteItem, handleDeleteState }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {title}
      <button onClick={e => {
        deleteItem(id);
        handleDeleteState(id);
      }}>
        <FaTrashAlt />
      </button>
    </li>
  )
}

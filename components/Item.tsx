import { FaTrashAlt } from 'react-icons/fa';

type ItemProps = {
  id: number
  title: string
  deleteItem: (id: number) => void
}

export function Item({ title, id, deleteItem }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {title}
      <button onClick={() => {
        deleteItem(id);
      }}>
        <FaTrashAlt />
      </button>
    </li>
  )
}

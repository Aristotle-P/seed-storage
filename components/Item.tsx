import { FaTrashAlt } from 'react-icons/fa';

type ItemProps = {
  id: number
  title: string
  // deleteItem: (id: number) => void
}

export function Item({ title, id }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {title}
    </li>
  )
}

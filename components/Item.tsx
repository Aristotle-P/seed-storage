type ItemProps = {
  id: string
  name: string
  group: string
}

export function Item({ id, name }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {name}
    </li>
  )
}

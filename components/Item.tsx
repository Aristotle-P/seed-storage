type ItemProps = {
  id: string
  name: string
}

export function Item({ name }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {name}
    </li>
  )
}

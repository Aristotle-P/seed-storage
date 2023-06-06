type ItemProps = {
  id: string
  title: string
  group: string
}

export function Item( {id, title, group}: ItemProps ) {
  return (
    <li className="flex gap-1 items-center">
      {title}
    </li>
  )
}

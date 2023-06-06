import { Item } from "@/components/Item"

type GroupProps = {
  id: string
  title: string
  items: typeof Item[]
}

export function Group({ title, items }: GroupProps) {
  return (
    <>
      <h3 className="text-2xl">{title}</h3>
      <ul>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </>
  )
}

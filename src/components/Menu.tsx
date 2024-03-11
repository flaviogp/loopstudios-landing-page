
const Menu = () => {
  return (
    <menu className={`[&>*]:uppercase text-2xl gap-5 flex flex-col`}>
        <li>about</li>
        <li>carrers</li>
        <li>event</li>
        <li>products</li>
        <li>support</li>
    </menu>
  )
}

export default Menu
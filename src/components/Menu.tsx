import { MenuHTMLAttributes } from "react";

type MenuProps = {
  setMenu: (arg: boolean) => void;
}

const Menu = ({setMenu}: MenuProps) => {
  const liBeforeStyles = `  
    w-max
    relative before:absolute 
    before:bottom-[-10px] before:left-0 
    before:border-0 before:w-0
    hover:before:w-full hover:before:border-2 
    before:transition-all before:delay-75
  `
  const handleClick = () => setMenu(false);

  return (
    <menu 
      className={`
        text-2xl gap-10 flex flex-col text-tw-white
        sm:flex-row sm:text-xl  
        lg:text-2xl 
      `}
    >
        <li className={liBeforeStyles} onClick={()=> handleClick()}>
          <a href="#about">about</a>
        </li>
        <li className={liBeforeStyles} onClick={()=> handleClick()}>
          <a href="#carrers">carrers</a>
        </li>
        <li className={liBeforeStyles} onClick={()=> handleClick()}>
          <a href="#event">event</a>
        </li>
        <li className={liBeforeStyles} onClick={()=> handleClick()}>
          <a href="#products">products</a>
        </li>
        <li className={liBeforeStyles} onClick={()=> handleClick()}>
          <a href="#suport">support</a>
        </li>
    </menu>
  )
}

export default Menu
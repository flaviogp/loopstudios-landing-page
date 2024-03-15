import Menu from "./Menu"

type navBarProps ={
    menu: boolean;
    setMenu: (arg: boolean) => void;
}

const NavBar = ({menu, setMenu}: navBarProps) => {
  return (
    <nav 
        className={`            
            absolute right-0 top-0 h-[100%] bg-black
            flex justify-start items-center
            transition-all delay-75 [&>*]:uppercase
            ${!menu ? 'w-0 p-0': 'w-full p-5'}
            sm:static sm:h-auto sm:w-auto sm:bg-transparent
        `}
    >
        <Menu setMenu={setMenu}/>
    </nav>

  )
}

export default NavBar
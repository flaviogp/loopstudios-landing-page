import Menu from "./Menu"

type navBarProps ={
    menu: boolean;
}

const NavBar = ({menu}: navBarProps) => {
  return (
    <nav 
        className={`
            absolute right-0 top-0 h-[100%] bg-black
            flex justify-start items-center
            transition-all delay-75 [&>*]:uppercase
            
            ${!menu ? 'w-0 p-0': 'w-full p-5'}
        `}
    >
        <Menu />
    </nav>

  )
}

export default NavBar
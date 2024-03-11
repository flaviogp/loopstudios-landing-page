import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import NavBar from './NavBar';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const handleActiveMenu = () => setMenu(!menu);

  return (
    <header className=" w-full h-[100vh] bg-tw-bg-hero-mobile bg-cover p-5 relative flex flex-col">
        <div className='w-full flex justify-between'>
            <div className="w-max z-10">
                <img src={Logo} alt="Logo" />
            </div>
            <label htmlFor="menu" className={`${menu ? 'bg-tw-bg-icon-close' : 'bg-tw-bg-icon-hamburger'} bg-cover w-7 h-6 cursor-pointer z-10`}>
                <input type="checkbox" name="menu" id="menu" className='hidden' onChange={() => handleActiveMenu()} />
            </label>
            <NavBar menu={menu}/>
        </div>
        <div className='border-2 mt-40 p-5 w-full flex self-center'>
            <p  className='text-tw-white uppercase text-4xl tracking-wider' >immersive <br/> experiences <br/> that <br/> deliver</p>
        </div>
    </header>
  )
}

export default Header
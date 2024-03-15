import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import NavBar from './NavBar';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const handleActiveMenu = () => setMenu(!menu);

  return (
    <header 
        className={`
            ${!menu ? 'relative' : 'fixed'}
            z-50
            w-full h-[100vh] bg-tw-bg-hero-mobile bg-cover 
            p-7 flex flex-col
            sm:bg-tw-bg-hero-desktop sm:h-max sm:p-10
        `}
    >
        <div className='w-full flex justify-between'>
            <div className="w-max z-10">
                <img src={Logo} alt="Logo" />
            </div>
            <label htmlFor="menu" className={`${menu ? 'bg-tw-bg-icon-close' : 'bg-tw-bg-icon-hamburger'} bg-cover w-7 h-6 cursor-pointer z-10 sm:hidden`}>
                <input type="checkbox" name="menu" id="menu" className='hidden' onChange={() => handleActiveMenu()} />
            </label>
            <NavBar menu={menu} setMenu={setMenu}/>
        </div>
        <div className='border-2 mt-60 sm:my-20 p-7 w-[35rem] sm:w-[550px] flex self-start'>
            <p  className='text-tw-white uppercase text-6xl tracking-[.2em] max-w-[350px]' >immersive experiences that deliver</p>
        </div>
    </header>
  )
}

export default Header
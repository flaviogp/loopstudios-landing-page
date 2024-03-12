import Logo from '../assets/images/logo.svg'
import Menu from './Menu'
import Socials from './Socials'
const Footer = () => {
  return (
    <footer className="w-full bg-tw-black flex flex-col items-center p-8 py-16 gap-7">
        <div className="w-max z-10">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="capitalize">
            <Menu />
        </div>
        <Socials />
        <span className='text-tw-very-dark-gray'>&copy; 2021 Loopstudios. All rights reserved.</span>
    </footer>
  )
}

export default Footer
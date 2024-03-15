import Logo from '../assets/images/logo.svg'
import Menu from './Menu'
import Socials from './Socials'
const Footer = () => {
  return (
    <footer className="w-full bg-tw-black flex flex-col items-center p-8 py-16 gap-12">
        <div className="w-max">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="capitalize">
            <Menu />
        </div>
        <Socials />
        <span className='text-tw-very-dark-gray text-2xl'>&copy; 2021 Loopstudios. All rights reserved.</span>
        <span className='text-tw-very-dark-gray text-2xl'>made with &hearts; by <a href='https://github.com/FlavioGP' className='border-b-0 transition-all  hover:border-b-2'>Flavio Gomes</a></span>
    </footer>
  )
}

export default Footer
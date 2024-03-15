
import Creations from './Creations'
import Info from './Info'

const Main = () => {
  return (
    <main className='p-7 w-full flex flex-col items-center max-w-[1000px]'>
        <Info />
        <Creations />
    </main>
  )
}

export default Main
import {creations} from '../utils/creations'
import CreationCard from './CreationCard'
import SeeAllButton from './SeeAllButton'

const Creations = () => {
  return (
    <div id='products' className="py-16 pb-32 flex flex-wrap gap-8 justify-center relative max-w-[1000px]">
        <div className='flex justify-center items-center sm:justify-between w-full'>
          <h2 className="text-5xl uppercase">our creations</h2>
          <SeeAllButton />
        </div>
        {creations.map(item => <CreationCard key={item.title} creation={item} />)}
    </div>
  )
}

export default Creations
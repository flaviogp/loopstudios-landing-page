import {creations} from '../utils/creations'
import CreationCard from './CreationCard'
import SeeAllButton from './SeeAllButton'

const Creations = () => {
  return (
    <div className="flex flex-col gap-5 items-center mt-8">
        <h2 className="text-3xl uppercase mb-8">our creations</h2>
        {creations.map(item => <CreationCard creation={item} />)}
        <SeeAllButton />
    </div>
  )
}

export default Creations
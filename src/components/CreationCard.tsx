
import { creation } from '../utils/creations'

type CreationCardProps = {
    creation: creation;
}

const CreationCard= ({creation}: CreationCardProps) => {
  return (
    <div 
        key={creation.title} 
        className={`
          ${creation.imageMobile} bg-cover bg-top 
          w-full h-32 
        `}>
            <div 
              className='
                w-[50%] h-full flex items-end p-5
                bg-gradient-to-r from-black/[.7] to-transparent

              '
            >
              <h3 
                className='
                  text-tw-white uppercase
                  tracking-wider text-2xl
                '
              > 
                {creation.title} 
              </h3> 
            </div>
    </div>
  )
}

export default CreationCard
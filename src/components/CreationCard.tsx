
import { creation } from '../utils/creations'

type CreationCardProps = {
    creation: creation;
}

const CreationCard= ({creation}: CreationCardProps) => {

  return (
    <div
        className={`
          ${creation.imageMobile} bg-cover bg-top 
          w-full max-w-[450px] h-52 flex items-end
          ${creation.imageDesktop} sm:w-[200px] sm:h-[350px]
          sm:bg-center
        `}        
        >
            <div 
              className='
                w-[50%] h-full flex items-end p-7
                bg-gradient-to-r from-black/[.7] to-transparent
                sm:w-full sm:bg-gradient-to-t sm:h-[50%]

              '
            >
              <h3 
                className='
                  text-tw-white uppercase
                  tracking-wider text-4xl
                '
              > 
                {creation.title}
              </h3> 
            </div>
    </div>
  )
}

export default CreationCard
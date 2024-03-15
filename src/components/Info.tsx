import InteractiveImage from '../assets/images/mobile/image-interactive.jpg'
import InteractiveDesktopImage from '../assets/images/desktop/image-interactive.jpg'

const Info = () => {
  return (
    <div 
      id='about'
      className='
        w-full pt-16 flex flex-col gap-10
      '
    >
        <div className='w-full sm:max-w-[60%]'>
            <img srcSet={`${InteractiveImage} 640w, ${InteractiveDesktopImage} 1400w`} alt="Interactive image" className='w-full h-full'/>
        </div>
        <div 
          className='
            flex flex-col gap-5 bg-tw-white text-center p-20
            sm:text-left sm:self-end sm:w-[56%] max-w-[500px] sm:mt-[-30%] sm:min-h-[280px]
            
          '
        >
          <h2 className="uppercase text-5xl sm:text-3xl md:text-5xl lg:text-6xl sm:max-w-[430px]">the leader in interactive vr</h2>
          <p className=' text-tw-dark-gray text-2xl lg:text:4xl sm:max-w-[430px]'>
              Founded in 2011, Loopstudios has been producting world-class virtual
              reality projects for some of the best companies around the globe. Our 
              award-winning creations have transformed business through digital experiences
              that bind to their brand.
          </p>
        </div>
    </div>
  )
}

export default Info
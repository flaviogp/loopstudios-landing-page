import InformationImage from '../assets/images/mobile/image-interactive.jpg'
const Info = () => {
  return (
    <div className='w-full py-12 flex flex-col gap-10 text-center'>
        <div>
            <img src={InformationImage} alt="Information image" />
        </div>
        <div>
          <h2 className="uppercase text-3xl">the leader in interactive vr</h2>
          <p className=' text-tw-dark-gray'>
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
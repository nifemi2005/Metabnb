import React from 'react'
import image4 from '../Images/image-4.png'
import image6 from '../Images/image-6.png'
import image3 from '../Images/image-3.png'
import image5 from '../Images/image-5.png'

const Hero = () => {
  return (
    <div className='text-black w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 lg:my-10'>
            <div className=''>
                <h1 className='lg:text-[56px] sm:text-5xl text-2xl text-[#434343] font-normal'>Rent a <span className='md:text-[56px] sm:text-5xl text-2xl text-[#A02279] font-bold'>Place</span> away from <span className='md:text-[56px] sm:text-5xl text-2xl text-[#A02279] font-bold'>Home</span> in the <span className='tmd:text-[56px] sm:text-5xl text-2xl text-[#A02279] font-bold'>Metaverse</span></h1>
                <p className='md:text-2xl sm:text-xl text-[#434343] font-normal py-9'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div>
                    <form className='flex '>
                        <input className='w-full border py-4 px-3 rounded-l-lg' type="text" id="text" placeholder="Search for location"/>
                        <input className='bg-[#A02279] text-white w-56 rounded-r-lg' type="submit" name="submit" value="Search"/>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-2 mx-auto gap-2 py-12 sm:py-8 md:py-[70px] lg:py-0'>
                <img className='relative md:w-[230px] sm:w-[200px] w-[150px] md:top-[21.5%] sm:top-[41.9%] top-[50%]' src={image4} alt="Image4" />
                <img className='relative md:w-[230px] sm:w-[200px] w-[150px] md:bottom-[30%]' src={image3} alt="Image3" />
                <img className='relative md:w-[230px] sm:w-[200px] w-[150px] md:top-[20.9%] sm:top-[40.9%] top-[50%]' src={image6} alt="Image6" />
                <img className=' relative md:w-[230px] sm:w-[200px] w-[150px] md:bottom-[31%] md:top-[-30.8%] sm:top-[-1%]' src={image5} alt="Image5" />
            </div>
        </div>
    </div>
  )
}

export default Hero
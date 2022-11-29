import React from 'react'
import NftImage1 from '../Images/NFT-image.png'
import NftImage2 from '../Images/NFT-image2.png'
import NftImage3 from '../Images/NFT-image3.png'

const Metabnb = () => {
  return (
    <div className='bg-[#A02279] w-full md:py-[0rem] md:px-14 sm:px-11 px-6'>
        <div className='max-w-[1240px] grid lg:grid-cols-2 lg:gap-[20rem] md:gap-[0rem] sm:gap-[3rem] gap-[1rem]'>
            <div className='md:my-[10rem] sm:my-[6rem] my-14'>
                <h1 className="font-bold md:text-[48px] sm:text-[40px] text-[30px] text-white">Metabnb NFTs</h1>
                <p className='md:text-lg text-white md:py-8 sm:py-2 py-8 lg:w-[415px]'> Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. 
                    These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button className='bg-white w-[150px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-[#A02279]'>Learn more</button>
            </div>
            <div className='lg:mx-0 md:mx-auto sm:mx-auto mx-auto md:top-[4rem] md:relative'>
                <img src={NftImage2} className='md:w-[378px] sm:w-[300px] w-[120px] rounded-lg lg:bottom-80 relative lg:rotate-[17.76deg] md:rotate-[17.76deg] sm:rotate-[17.76deg] lg:top-[80px] sm:left-[80px] transform lg:left-0 rotate-[17.76deg] left-3' alt="NFTIMAGE1" />
                <img src={NftImage1} className='md:w-[378px] sm:w-[300px] w-[120px] rounded-lg lg:bottom-80 relative lg:-top-[20px] transform md:-rotate-[26.02deg] md:bottom-[85px] md:right-[155px] lg:-rotate-[26.02deg] sm:-rotate-[26.02deg] -rotate-[26.02deg] lg:right-[240px] sm:right-[110px] sm:bottom-[75px] right-[62px] bottom-[25px]' alt="NFTIMAGE2" />
                <img src={NftImage3} className='md:w-[378px] sm:w-[300px] w-[120px] rounded-lg lg:left-[40px] relative lg:-top-[230px] transform md:-rotate-[8.76deg] md:left-[8rem] md:bottom-[313.9px] lg:-rotate-[8.76deg] sm:-rotate-[8.76deg] -rotate-[8.76deg] sm:bottom-[248px] sm:left-[7rem] left-[25px] bottom-[99px]' alt="NFTIMAGE3" />
            </div>
        </div>
    </div>
  )
}

export default Metabnb
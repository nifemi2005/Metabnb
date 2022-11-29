import React from 'react'
import mbtoken from '../Images/mbtoken.png'
import metamask from '../Images/metamask.svg'
import opensea from '../Images/opensea.png'

const Underline = () => {
  return (
    <div className='bg-[#A02279] w-full md:flex sm:flex flex md:py-3 sm:py-3 py-2 md:mx-0 sm:mx-0 items-center justify-between md:px-[50px]'>
      <div className='flex items-center'>
        <img src={mbtoken} alt="mbtoken" />
        <p className='md:text-[40px] sm:text-[20px] text-[12px] font-bold text-[#F7F7F7]'>MBToken</p>
      </div>
      <div>
        <img src={metamask} className='md:w-[230px] sm:w-[120px] w-[80px]' alt="metamask" id='metamask' />
      </div>
      <div className='flex items-center'>
        <img src={opensea} className='' alt="opensea" />
        <p className='font-bold md:text-[32px] sm:text-[20px] text-[12px] text-[#f7f7f7]'>OpenSea</p>
      </div>
    </div>
  )
}

export default Underline
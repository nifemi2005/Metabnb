import React from 'react'
import FooterLogo from '../Images/Group.svg'
import FooterIcon1 from '../Images/facebook.png'
import FooterIcon2 from '../Images/instagram.png'
import FooterIcon3 from '../Images/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#1d1d1e] text-white md:text-start sm:text-center text-center md:py-14 sm:py-12 py-10 md:flex md:items-center md:justify-between md:px-[80px]'>
        <div className='flex flex-col gap-[50px]'>
            <div className='footer-nav'>
                <img className='block md:mx-0 sm:mx-auto mx-auto' src={FooterLogo} alt="footer-logo" />
            </div>
            <div className='flex md:mx-0 sm:mx-auto mx-auto gap-5'>
                <img src={FooterIcon1} alt="facebook" />
                <img src={FooterIcon2} alt="instagram" />
                <img src={FooterIcon3} alt="twitter" />
            </div>
            <div>
                <p>&copy; 2022 Metabnb</p>
            </div>
        </div>
        <div className='md:flex md:w-[698px] md:justify-between'>
            <div className='flex flex-col'>
                <p className='py-[20px] text-white md:text-xl text-[18px] font-bold'>Community</p>
                <Link>NFTs</Link>
                <Link className='py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal'>Tokens</Link>
                <Link className='py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal'>Landlords</Link>
                <Link className='py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal'>Discord</Link>
            </div>
            <div className='flex flex-col'>
                <p className="py-[20px] text-white md:text-xl text-[18px] font-bold">Places</p>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Castle</Link>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Farms</Link>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Beach</Link>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Learn more</Link>
            </div>
            <div className='flex flex-col'>
                <p className="py-[20px] text-white md:text-xl text-[18px] font-bold">About us</p>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Road map</Link>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Creators</Link>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Career</Link>
                <Link className="py-[10px] md:text-[18px] sm:text-[17px] text-[15px] text-[#f1f3f9] font-normal">Contact us</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
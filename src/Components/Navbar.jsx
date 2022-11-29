import React from 'react'
import metabnb from '../Images/Nav-logo.png'
import { Link} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import ConnectButton from './ConnectButton';
import ConnectButtonMobile from './ConnectButtonMobile';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-32 max-w-[1240px] mx-auto px-4'>
        <img src={metabnb} className='md:w-[233px] sm:w-[200px] w-[180px]' alt="metabnb" />
        <div className='hidden lg:flex'>
            <Link className='text-[#434343] text-xl p-4' to='/'>Home</Link>
            <Link className='text-[#434343] text-xl p-4' to='/place'>Place to stay</Link>
            <Link className='text-[#434343] text-xl p-4'>NFTs</Link>
            <Link className='text-[#434343] text-xl p-4'>Community</Link>
        </div>
        <ConnectButton/>
        <div onClick={handleNav} className='block lg:hidden'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[black] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
            <img src={metabnb} className='m-4 w-44' alt="metabnb" />
            <div className='p-4 uppercase flex flex-col'>
                <Link className='text-[white] text-xl p-4 border-b-gray-600 border-b' to='/'>Home</Link>
                <Link className='text-[white] text-xl p-4 border-b-gray-600 border-b' to='/place'>Place to stay</Link>
                <Link className='text-[white] text-xl p-4 border-b-gray-600 border-b'>NFTs</Link>
                <Link className='text-[white] text-xl p-4 border-b-gray-600 border-b'>Community</Link>
            </div>
            {/* <button className='text-[white] text-xl bg-[#A02279] w-[180px] px-5 rounded-lg py-4 mx-7'>
                Connect Wallet
            </button> */}
            <ConnectButtonMobile/>

        </div>
    </div>
  )
}

export default Navbar
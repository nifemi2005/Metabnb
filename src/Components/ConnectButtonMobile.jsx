import React, { useState } from 'react'
import { Modal } from './Modal';

const ConnectButtonMobile = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <>
        <div>
            <button onClick={() => setOpenModal(true)} className='text-white text-xl bg-[#A02279] w-[160px] px-2 rounded-lg py-4 md:flex mx-6'>Connect Wallet</button>
        </div>
        <Modal open={openModal} onClose={()=>setOpenModal(false)} />
    </>    
  );
}

export default ConnectButtonMobile
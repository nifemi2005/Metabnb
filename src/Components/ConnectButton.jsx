import React, { useState } from 'react'
import { Modal } from './Modal';

const ConnectButton = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <>
        <div>
            <button onClick={() => setOpenModal(true)} className='text-[white] text-xl bg-[#A02279] w-[180px] px-5 rounded-lg py-4 hidden lg:flex'>Connect Wallet</button>
        </div>
        <Modal open={openModal} onClose={()=>setOpenModal(false)} />
    </>    
  );
}

export default ConnectButton
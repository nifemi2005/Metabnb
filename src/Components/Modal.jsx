import React from "react";
import image1 from "../Images/x.png";
import image2 from "../Images/image 69.png";
import image3 from "../Images/image 66.png";
import image4 from "../Images/Group.png";

export const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.1)] z-50" />
      <div className="fixed md:top-[30%] sm:top-[35%] top-[30%] md:left-[29%] sm:left-[20%] left-[5%] bg-white z-50 md:w-[45%] sm:w-[60%] w-[90%] rounded-lg">
        <div className="p-8">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Connect Wallet</h1>
            <img src={image1} onClick={onClose} className='' alt="cancel" />
          </div>
        </div>
      <div className='border-b border-b-[#0000008a]'></div>
        <div className="flex flex-col gap-4 p-8">
          <h3 className="text-[#333333] text-base">Choose your preferred wallet</h3>
          <div className="flex items-center justify-between border rounded-lg w-[90%] h-16 px-4">
            <div className="flex items-center">
              <img src={image3} alt="" />
              <p>Metamask</p>
            </div>
            <img src={image4} alt="" />
          </div>

          <div className="flex items-center justify-between border rounded-lg w-[90%] h-16 px-4">
            <div className="flex items-center">
              <img src={image2} alt="" />
              <p>WalletConnect</p>
            </div>
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

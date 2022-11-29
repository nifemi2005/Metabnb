import React from 'react'
import setting from "../Images/setting-5.png";

const ExtraNav = () => {
  return (
    <div className='grid md:grid-cols-10 sm:grid-cols-3 grid-cols-3 md:px-20 sm:px-14 px-4 gap-19 md:py-10 sm:py-9 py-4'>
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>Carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
        <div className='flex border justify-between'>
            <p>
                Location
            </p>
            <img src={setting} alt="setting" />
        </div>
    </div>
  )
}

export default ExtraNav
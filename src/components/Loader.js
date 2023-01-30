import React from 'react';
import loader from "./Loading-gif.gif"

export default function Loader() {
  return (
    <>
      <div className='bg-black h-[100vh] w-[100vw] fixed flex justify-center items-center'>
        <img className='h-[50vh]' src={loader} alt="" />
      </div>
    </>
  )
}

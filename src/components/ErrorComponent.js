import React from 'react'

export default function ErrorComponent({message}) {
  return (
    <div className='h-[100vh] bg-black text-red-500 text-center flex flex-col items-center justify-center'>
    <p>400: Bad Request !</p>
      <h1>{message}</h1>
    </div>
  )
}

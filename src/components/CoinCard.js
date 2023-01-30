import React from 'react'
import { Link } from 'react-router-dom'

export default function CoinCard({ id, image, name, price, symbol, currencySymbol }) {
  return (
    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mx-10'>
      <Link className='border border-gray-400 drop-shadow-2xl rounded-md  min-w-[200px] m-3 h-[25vh] flex items-center justify-center flex-col ' to={`/coins/${id}`} >
        <img className='w-[60px]' src={image} alt="" />
        <div>{symbol}</div>
        <div>{name}</div>
        <div>Price : {price ? `${currencySymbol}${price}` : "NA"}</div>
      </Link>
    </div>
  )
}

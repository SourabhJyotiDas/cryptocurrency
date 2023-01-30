import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


export default function Home() {
  return (
    <div>
      <div className="">
        <div className='header opacity-90 '>
          <div className='flex flex-col justify-center items-start h-[100vh]  mx-10 lg:px-10'>

            <div className='fontResp secondaryFont tracking-widest text-white text-xs md:text-sm lg:text-base'>
              A cryptocurrency exchange, or a digital currency exchange (DCE), is a business that allows customers to trade cryptocurrencies or digital currencies for other assets, such as conventional fiat money or other digital currencies. Exchanges may accept credit card payments, wire transfers or other forms of payment in exchange for digital currencies or cryptocurrencies. A cryptocurrency exchange can be a market maker that typically takes the bid–ask spreads as a transaction commission for is service or, as a matching platform, simply charges fees.
            </div>

            <button className='bg-blue-600 tracking-widest secondaryFont text-sm text-white p-2 rounded-md hover:bg-black hover:text-white mt-5 md:text-base'><Link to={"/exchanges"}>Learn More</Link></button>


          </div>
        </div>

        <div className='header2 opacity-90'>
          <div className='flex flex-col justify-center items-start h-[100vh]  mx-10 lg:px-10'>

            <div className='fontResp secondaryFont tracking-widest text-white text-xs md:text-sm lg:text-base'>
              A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.[2] It is a decentralized system for verifying that the parties to a transaction have the money they claim to have, eliminating the need for traditional intermediaries, such as banks, when funds are being transferred between two entities.
            </div>

            <button className='bg-blue-600 tracking-widest secondaryFont text-sm  text-white p-2 rounded-md hover:bg-black hover:text-white mt-5 md:text-base'><Link to={"/coin"}>Learn More</Link></button>


          </div>
        </div>



      </div>


    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Header() {

  const toggleMenu = () => {
    document.getElementById("menuList").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menuClose").classList.toggle("hidden");
  }

  const toggleHide = () => {
    document.getElementById("menuList").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menuClose").classList.toggle("hidden");
  }

  return (
    <>
      <div className='sticky top-0 z-10 '>
        <nav className='bg-gray-800 px-2 py-3 text-white  flex items-center justify-between  lg:px-20 lg:py-5'>
          <div className='text-lg cursor-pointer font-medium'><Link to={"/"}>Crypto.com</Link></div>
          <HiMenuAlt3 onClick={toggleMenu} id='menu' className='text-2xl md:hidden' />
          <AiOutlineCloseCircle onClick={toggleMenu} id='menuClose' className=' text-2xl hidden md:hidden' />
          <div className='hidden md:block  hover:text-gray-300 text-xs  space-x-5 justify-center items-center  px-5 '>
            <Link></Link>
            <Link className='font-bold tracking-widest hover:text-white' to="/exchanges">Exchange</Link>
            <Link className='font-bold tracking-widest hover:text-white' to="/coin">Coins</Link>
            <Link className='font-bold tracking-widest hover:text-white' to="/about">About</Link>
            <Link className='font-bold tracking-widest hover:text-white' to="/blogs">Blogs</Link>
            <Link></Link>
          </div>
        </nav>
        <div id='menuList' className='hidden'>
          <div className=' bg-gray-500 text-white hover:text-gray-300 text-xs flex flex-col space-y-5 justify-center items-center  px-5  lg:flex'>
            <Link></Link>
            <Link onClick={toggleHide} className='font-bold tracking-widest hover:text-white' to="/exchanges">Exchange</Link>
            <Link onClick={toggleHide} className='font-bold tracking-widest hover:text-white' to="/coin">Coins</Link>
            <Link onClick={toggleHide} className='font-bold tracking-widest hover:text-white' to="/about">About</Link>
            <Link onClick={toggleHide} className='font-bold tracking-widest hover:text-white' to="/blogs">Blogs</Link>
            <Link></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
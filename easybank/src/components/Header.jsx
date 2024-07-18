import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row px-6 md:px-32 py-6 justify-between items-center font-public-sans 2xl:w-[1440px] m-auto z-50 bg-white relative">
      <img src={logo} className="h-6" alt="Logo" />

      <nav className="hidden md:flex list-none gap-6 text-GrayishBlue">
        <li><a className='hover:border-b-2 hover:pb-2 hover:border-b-LimeGreen' href="#hero">Home</a></li>
        <li><a className='hover:border-b-2 hover:pb-2 hover:border-b-LimeGreen' href="#about">About</a></li>
        <li><a className='hover:border-b-2 hover:pb-2 hover:border-b-LimeGreen' href="#footer">Contact</a></li>
        <li><a className='hover:border-b-2 hover:pb-2 hover:border-b-LimeGreen' href="#blog">Blog</a></li>
        <li><a className='hover:border-b-2 hover:pb-2 hover:border-b-LimeGreen' href="#footer">Careers</a></li>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src={isOpen ? close : hamburger} alt="Menu Icon" />
        </button>
      </div>

      <button className="btnRequest !hidden md:!flex">
        <a className="text-center" href="">Request Invite</a>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center md:hidden z-50">
          <nav className="flex flex-col items-center py-4 w-full list-none">
            <li className="py-2 w-full text-center"><a href="#">Home</a></li>
            <li className="py-2 w-full text-center"><a href="#">About</a></li>
            <li className="py-2 w-full text-center"><a href="#">Contact</a></li>
            <li className="py-2 w-full text-center"><a href="#">Blog</a></li>
            <li className="py-2 w-full text-center"><a href="#">Careers</a></li>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

import Link from "next/link";
import React from "react";
import Image from 'next/image'
import logo from '@/public/img/logo.png'

const Footer = () => {
  return (
    <footer className="flex items-start justify-between w-full px-10 py-6 bg-[#000] text-[#fff]">
      <div className="address">
      <Link href={'/'} className='cursor-context-menu flex justify-center logo-box-header gap-2 items-center text-xl font-bold'>
        <Image src={logo} alt="logo" className="logo-img" style={{ width: "60px", height: '60px' }} title='AESTHETIC ATHLETICS' />
        <h1>AESTHETIC ATHLETICS</h1>
      </Link>
      </div>
      <div className="quickLink">
        <h1 className="text-xl font-bold">QUICK LINKS</h1>
      </div>
      <div className="newsletter">
        <h1 className="text-xl font-bold">NEWSLETTER</h1>
      </div>
    </footer>
  );
};

export default Footer;

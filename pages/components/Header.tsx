import Image from 'next/image'
import logo from '@/public/img/logo.png'
import Link from 'next/link'

const Header = () => {
  
  return (
    <header className='w-full h-auto bg-[#000] text-white flex justify-between items-center font-medium px-10 shadow-md shadow-gray-400 relative z-50 py-2'>

      <Link href={'/'} className='cursor-context-menu flex justify-center logo-box-header gap-2 items-center text-xl font-bold'>
        <Image src={logo} alt="logo" className="logo-img" style={{ width: "60px", height: '60px' }} title='AESTHETIC ATHLETICS' />
        <h1>AESTHETIC ATHLETICS</h1>
      </Link>

      <ul className="tabs web-tabs flex text-[#fff] gap-4">

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>HOME</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>ABOUT US</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>SERVICES</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>TRAINERS</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>TESTMONIALS</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>FAQS</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>FACILITIES</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>CONTACT US</h4>
          </li>
        </Link>

      </ul>

      

    </header>
  )
}

export default Header
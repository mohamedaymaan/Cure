import { Link, NavLink } from "react-router";
import Avatar from '../assets/icons/Avatar.png'
import Heart from '../assets/icons/BsHeartPulse.png'
import Magnifer from '../assets/icons/Magnifer.png'
import Menu from '../assets/icons/Menu.png'
import Ring from '../assets/icons/Ring.png'

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center ">
        <Link to="/" className="block">
          <img src={Heart} alt="" />
          
        </Link>
        <div className="block relative">
          <img src={Magnifer} className="absolute top-2 start-2" alt="" />
          <input type="text" className="py-2 px-10 rounded-[10px] bg-[#F5F6F7] w-2xl" placeholder="Search about specialty, doctor " />
        </div>
        <div className="block">
          <ul className="flex justify-between items-center gap-4">
            <li>
              <Link to=''>
                <img src={Menu} alt=""  />
              </Link>
            </li>
            <li>
              <Link to=''>
                <img src={Ring} alt="" />
              </Link>
            </li>
            <li>
              <img src={Avatar} alt="" />
            </li>
          </ul>
        </div>
        {/* Mobile Responsive*/}
        {/* <div className='lg:hidden w-full space-y-5'>
     <div className='flex justify-between items-center '>
        <div>
            <h2 className='font-bold text-secondary-900 text-lg'>Welcome</h2>
            <p className='text-secondary-400 font-extralight'>explore The Best Places In World!</p>
        </div>
        <div className='rounded-full overflow-hidden size-12'>
        <img src={avatar} alt="" className='w-full h-full object-cover'/>
        </div>
      </div>
     <div className='flex items-center gap-3'>
        <div className='relative flex-1'>
            <input type="text" className='w-full border border-secondary-200 rounded-lg py-2 px-9 placeholder:text-secondary-300 focus:outline-0 focus:border-primary-300 ' placeholder='Search ...'/>
            <img src={searchMobile} alt="" className='absolute top-1/2 size-6 -translate-y-1/2 left-1.5' />
        </div>
        <div className='border border-secondary-200 rounded-lg p-2'>
            <img src={unionMobile} alt="" />
        </div>
     </div>
    </div> */}
      </nav>
    </>
  );
}
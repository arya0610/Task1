import React, {useContext} from 'react';
import { FaAddressCard, FaListUl } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import { dataProvider } from '../../context/context';

const Sidebar = () => {
  const { pathname } = useLocation();
  const { openModal } = useContext(dataProvider);

  return (
    <div className='min-w-[320px] flex flex-col gap-y-10 shadow-2xl rounded-[50px] px-10 py-12'>
      <div className='flex p-[15px] gap-x-3 items-center bg-white rounded-lg'>
        <img className='w-[50px] h-[50px] rounded-full' src="https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-anime-girl-in-a-neon-shirt-with-blue-hair-image_2563735.jpg" alt="profil" />
        <div>
          <h2 className='text-xl font-bold mb-0'>Hi Reader,</h2>
          <p className='mt-0'>Here's your News!</p>
        </div>
      </div>

      <div className='flex p-[15px] gap-x-3 flex-col items-center bg-white rounded-lg'>
        <h2 className='text-2xl font-bold'>View Toggle</h2>
        <div className='flex mt-2 rounded-lg bg-gray-300'>
          <NavLink to="/" className={`py-4 text-2xl px-6 rounded-lg ${pathname === "/" ? 'bg-green-300' : ""}`}>
            <FaAddressCard />
          </NavLink>
          <NavLink to="/lists" className={`py-4 text-2xl px-6 rounded-lg ${pathname === "/lists" ? 'bg-green-300' : ""}`}>
            <FaListUl />
          </NavLink>
        </div>
      </div>

      <div className='flex p-[15px] gap-x-3 flex-col items-center bg-white rounded-lg'>
        <h2 className='text-2xl font-bold'>Have a Feedback?</h2>
        <div onClick={openModal} className='flex mt-2 rounded-lg bg-green-300 py-4 px-6 cursor-pointer'>
          <h2 className='text-xl'>We are Listening!</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

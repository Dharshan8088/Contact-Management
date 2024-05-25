import React, { useState } from 'react';
import menuicon from '../assests/ham_menu_white.svg';
import closeicon from '../assests/close_icon.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <div
        
        // <xss
        className={classNames(
          'p-1  px-2 cursor-pointer bg-gray-800 transition-all duration-300 icon-container',
          { 'w-10 border-2 rounded-lg': !isToggle, ' w-full h-fit': isToggle }
        )}
      >
        {!isToggle ? (
          <img className="icon" onClick={() => setIsToggle(true)} src={menuicon} alt='menu' />
        ) : (
          <img className="icon" onClick={() => setIsToggle(false)} src={closeicon} alt='close' />
        )}
      </div>

      <div
        className={classNames(
          'flex flex-col gap-3 text-cyan-300 m-0 pt-7 px-4 rounded-br-lg bg-gray-800 transition-all duration-500 ease-out',
          { 'w-34 h-full': isToggle, 'hidden': !isToggle }
        )}
      >
        {/* NAV LINKS */}
        <p className='cursor-pointer'>
          <Link to='/'>Contacts</Link>
        </p>
        <p className='cursor-pointer'>
          <Link to='/charts'>Charts and Maps</Link>
        </p>
      </div>
    </>
  );
}

export default Navbar;

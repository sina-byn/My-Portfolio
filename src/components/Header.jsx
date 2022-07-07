import React from 'react';

// Importing Components
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='flex justify-between h-[10%] pl-[3.7rem] pr-16 py-5 1030px:px-8'>
            <Logo />
            <Navbar />
        </header>
    );
};

export default Header;
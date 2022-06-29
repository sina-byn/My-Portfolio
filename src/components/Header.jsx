import React from 'react';

// Importing Components
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='flex justify-between h-[10%] px-16 py-5'>
            <Logo />
            <Navbar />
        </header>
    );
};

export default Header;
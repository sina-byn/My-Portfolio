import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    setCurrentPage(() => {
      switch (pathname) {
        case "/about-me":
          return 3;
        default:
          return 1;
      }
    });
  }, [currentPage, pathname]);

  const toggleMenuVisibility = () => {
    setIsMenuShown(!isMenuShown);
  };

  return (
    <>
      <nav
        className={`${
          isMenuShown ? "" : "730px:translate-x-full"
        } 730px:h-full 730px:fixed 730px:top-0 730px:right-0 z-40 730px:min-w-[25%] 730px:bg-[#333] 730px:py-0 730px:px-[25px] transition-all duration-500 ease-in-out`}
      >
        <ul className='nav-list flex items-center gap-x-9 730px:h-full 730px:flex-col 730px:justify-center 730px:gap-[30px] 730px:relative'>
          <li className='730px:text-center'>
            <Link
              to='/'
              onClick={() => setCurrentPage(1)}
              className={`${
                currentPage === 1 ? "current-page-link" : ""
              } animated-link relative text-[18px] 730px:text-[1.1rem]`}
            >
              Home
            </Link>
          </li>
          <li className='730px:text-center'>
            <Link
              to='/my-work'
              onClick={() => setCurrentPage(2)}
              className={`${
                currentPage === 2 ? "current-page-link" : ""
              } animated-link relative text-[18px] 730px:text-[1.1rem]`}
            >
              My Work
            </Link>
          </li>
          <li className='730px:text-center'>
            <Link
              to='/about-me'
              onClick={() => setCurrentPage(3)}
              className={`${
                currentPage === 3 ? "current-page-link" : ""
              } animated-link relative text-[18px] 730px:text-[1.1rem]`}
            >
              About Me
            </Link>
          </li>
          <svg
            className='menu-close-btn hidden 730px:block w-[17px] absolute top-[22px] right-[5px] fill-light cursor-pointer hover:fill-orangered'
            onClick={toggleMenuVisibility}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
          >
            <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
          </svg>
        </ul>
      </nav>
      <svg
        className='menu-show-btn hidden fill-light cursor-pointer 730px:block 730px:w-[1.5rem] hover:fill-orangered'
        onClick={toggleMenuVisibility}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
      </svg>
      <div
        onClick={toggleMenuVisibility}
        className={`${
          isMenuShown ? "" : "-translate-x-full"
        } cover hidden 730px:block w-full h-full fixed top-0 left-0 z-30 bg-cover/50 transition-transform duration-500 ease-in-out cursor-pointer`}
      ></div>
    </>
  );
};

export default Navbar;
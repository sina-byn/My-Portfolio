import React from "react";
import { Link } from "react-router-dom";

// Importing Layouts
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <main className='flex flex-col justify-center items-center h-[85vh] px-[30px] pt-[20px] pb-[80px]'>
        <h2 className='text-[1.3rem] text-center word-space-5px font-medium mb-1'>
          WELCOME TO MY PORTFOLIO
        </h2>
        <p className='text-center text-[1.1rem]'>
          I'm <span className='text-orangered font-bold'>Sina Bayandorian</span>
          , a front-end web developer living in Iran chasing my passion and
          building my career path.
        </p>
        <Link
          to='/about-me'
          className='text-[0.9rem] border-[1px] border-light pt-[8px] px-[30px] pb-[10px] mt-8 transition-transform duration-100 ease-linear hover:bg-[#999999]/60 active:scale-95'
        >
          About Me
        </Link>
      </main>
    </MainLayout>
  );
};

export default HomePage;
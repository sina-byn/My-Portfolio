import React from "react";

// Importing Layouts
import MainLayout from "../layouts/MainLayout";

const AboutMe = () => {
  return (
    <MainLayout>
      <main className='w-full h-[85vh] 1030px:overflow-y-auto'>
        <div className='content-wrap flex justify-between h-full 1030px:h-fit w-full 1030px:flex-col 1030px:pb-[25px]'>
          <section className='flex justify-center items-center w-1/2 pr-[100px] 500px:pr-[18%] 900px:pr-[10%] 1030px:w-full 1030px:mt-20'>
            <figure className='w-[320px] h-[320px] bg-orangered font-medium rounded-blob 360px:w-[190px] 360px:h-[190px] 500px:w-[220px] 500px:h-[220px] 1030px:max-w-[280px] 1030px:max-h-[280px]'>
              <img
                src='/images/personal-pic.webp'
                alt='Personal'
                className='w-full rounded-blob -scale-x-100 translate-x-[60px] -translate-y-[80px]'
              />
            </figure>
          </section>
          <section className='w-1/2 overflow-y-auto overflow-x-hidden 1030px:px-10 1030px:w-full 1030px:overflow-y-hidden'>
            <h2 className='text-[1.4rem] font-medium mb-[20px]'>About Me</h2>
            <p>
              <span className='text-orangered font-medium'>First Name: </span>
              Sina
            </p>
            <br />
            <p>
              <span className='text-orangered font-medium'>Last Name: </span>
              Bayandorian
            </p>
            <br />
            <p>
              <span className='text-orangered font-medium'>Birth Date: </span>
              05/24/2003
            </p>
            <br />
            <p>
              <span className='text-orangered font-medium'>Education: </span>
            </p>
            <p className='ml-[30px]'>
              Software Engineering Student at KIAU - Karaj Azad University
            </p>
            <br />
            <p className='text-orangered font-medium'>Skills:</p>
            <div className='skills-section flex flex-col gap-y-2 w-full ml-[30px] mt-1'>
              <h6>HTML - 5</h6>
              <h6>CSS - 3</h6>
              <h6>SASS</h6>
              <h6>TailwindCSS</h6>
              <h6>JavaScript</h6>
              <h6>TypeScript</h6>
              <h6>React.JS</h6>
              <h6>Next.JS</h6>
              <div className='w-1/2 mx-auto pr-[50px] mt-6 1030px:pr-[35px] 730px:w-full 730px:text-center'>
                <a
                  className='text-[0.8rem] border-[2px] border-light px-[20px] pt-[10px] pb-[13px] hover:bg-[#535353]/40 active:bg-[#535353]/80'
                  href='/uploads/sina-bayandorian.pdf'
                  download='sina-bayandorian.pdf'
                >
                  Download my Resume
                </a>
              </div>
            </div>
            <br />
            <p className='text-orangered font-medium'>Hobbies:</p>
            <div className='hobbies-section ml-[30px]'>
              <p>Watching Movies</p>
              <p>Reading Books</p>
              <p>Kickboxing</p>
              <p>Learn more About Technology and Programming</p>
            </div>
            <br />
            <p className='text-orangered font-medium'>
              Passion and Motivation:
            </p>
            <div className='motives-section ml-[30px]'>
              Technology is my passion and will always be my passion, what I
              love about Technology is that it makes us to make a change that
              really matters, one that really helps people, one that can change
              lives and make them easier. So, with all that said I am and will
              be trying to learn more and more about this amazing field of
              science that I love in order to make all lives around this globe
              of ours easier, healthier and better.
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
};

export default AboutMe;

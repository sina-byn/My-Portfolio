import React from "react";

const Card = ({
  link,
  repoLink,
  title,
  img,
  alt,
  video,
  features,
  techStack,
  videoRef,
}) => {
  const clickHandler = () => {
    if (video && videoRef.current) {
      const videoElem = videoRef.current;
      videoElem.className = "initial";
      videoElem.src = video;
      videoElem.load();
      videoElem.play();
      videoElem.requestFullscreen();
  
      videoElem.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          videoElem.className = "hidden";
        }
      });
    }
  }

  return (
    <div className={`card bg-[#222] border-[3px] border-primary-light border-opacity-20 px-[15px] pt-[15px] ${repoLink ? "pb-[15px]" : ""}`}>
      <figure className='flex items-center justify-center w-full relative mb-[8px]'>
        <div className='cover w-full h-full absolute top-0 left-0 bg-cover/40'></div>
        <img src={img} alt={alt} className='w-full' />
        {link ? (
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center gap-x-[5px] absolute text-[#bebebe] text-[15px] font-bold'
          >
            <span className="730px:hidden">{link.slice(0, 20) + "..."}</span>
            <span className="hidden 730px:inline">project's link</span>
            <svg
              className='w-[20px] fill-[#bebebe] 730px:w-[25px]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
            >
              <path d='M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z' />
            </svg>
          </a>
        ) : (
          <div onClick={clickHandler} className='play-btn-container flex items-center justify-center w-[45px] h-[45px] rounded-[50%] bg-[#ccc] absolute cursor-pointer 730px:w-[40px] 730px:h-[40px]'>
            <svg
              className='fill-primary w-[35%] ml-[6%]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
              fill='#222'
            >
              <path d='M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z' />
            </svg>
          </div>
        )}
      </figure>
      <section className='font-light text-[0.9rem]'>
        <h6 className='text-[0.9rem] mb-[7px]'>
          <span className='text-[1rem] font-bold text-orangered'>
            project:{" "}
          </span>
          {title}
        </h6>
        <p className='text-orangered text-[1rem] font-bold'>features:</p>
        <p className='text-[0.85rem] mr-[3px] mb-[10px]'>{features}</p>
        <p className='text-orangered text-[1rem] font-bold'>tech-stack:</p>
        <p className='text-[0.85rem] mr-[3px] mb-[10px]'>{techStack}</p>
      </section>
      {repoLink ? (
        <section className='flex items-center justify-center w-full'>
          <a
            href={repoLink}
            target='_blank'
            rel='noreferrer'
            className='w-[50%] text-[13px] text-center text-[15px] border-[2px] border-primary-light/20 px-[10px] pt-[12px] pb-[10px] mx-auto mt-1 hover:bg-[#ccc] hover:bg-opacity-[15%]'
          >
            Github Repo
          </a>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;

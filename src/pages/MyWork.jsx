import React, { useRef } from "react";

// Importing Layouts
import MainLayout from "../layouts/MainLayout";

// Importing Data
import CARDS_DATA from "../data/CARDS_DATA";

// Importing Components
import Card from "../components/UI/Card";

const MyWork = () => {
  const videoRef = useRef(null);

  return (
    <MainLayout>
      <main className='h-[85vh] 730px:pr-0 pr-[8px] pb-[20px]'>
        <div className='content-wrap grid grid-cols-3 gap-[30px] w-full max-h-full overflow-y-auto pr-[52px] pl-[60px] pt-[10px] pb-[20px] 730px:px-[30px] 1030px:px-[20px] 1030px:grid-cols-2 1030px:gap-[20px] 600px:grid-cols-1 600px:gap-y-5 600px:gap-x-0 pb-20 sm:pb-0'>
          {CARDS_DATA.map((card, idx) => {
            return (
              <Card
                key={idx}
                link={card.link}
                repoLink={card.repoLink}
                title={card.title}
                img={card.img}
                alt={card.alt}
                video={card.video}
                features={card.features}
                techStack={card.techStack}
                videoRef={videoRef}
              />
            );
          })}
          <video
            ref={videoRef}
            preload='none'
            src='/videos'
            className='hidden'
          ></video>
        </div>
      </main>
    </MainLayout>
  );
};

export default MyWork;
import React from "react";

// Importing Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='container w-full max-w-[1400px] text-light mx-auto'>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

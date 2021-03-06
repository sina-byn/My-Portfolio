import React from "react";

// Importing React-Router-DOM
import { Route, Routes } from "react-router-dom";

// Importing Pages
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className='container w-full max-w-[1400px] min-h-screen text-light mx-auto'>
      <Routes>
        <Route path='/my-work' element={<MyWork />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
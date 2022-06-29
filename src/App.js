import React from "react";

// Importing React-Router-DOM
import { Route, Routes, Navigate } from "react-router-dom";

// Importing Pages
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className='app-container w-full max-w-[1440px] text-light mx-auto'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

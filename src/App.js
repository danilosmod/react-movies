import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Footer from "./Components/Footer";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="moviedetails/:id" element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

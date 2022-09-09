import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comment from "./components/comment/Comment";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

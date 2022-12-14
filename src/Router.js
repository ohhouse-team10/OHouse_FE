import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Community from "./pages/Community";
import Comment from "./components/comment/Comment";
import DetailPage from "./pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<Register />} />
        <Route path="/mypage/:id" element={<MyPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/community" element={<Community />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

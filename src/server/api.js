import axios from "axios";
import {getRefreshToken, getAccessToken} from "./cookie";

const BASE_URL = " http://3.38.162.168";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const refreshToken = getRefreshToken();
  const accessToken = getAccessToken();

  if (!accessToken || !refreshToken) {
    config.headers["authorization"] = null;
    config.headers["refreshtoken"] = null;
    return config;
  } else {
    config.headers["authorization"] = accessToken;
    config.headers["refreshtoken"] = refreshToken;
    return config;
  }
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    try {
      if (error.response.data.code === "EXPIRED_TOKEN") {
        return api.request(error.config);
      }
    } catch (error) {
      window.location.href = "/login";
    }
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default api;

// auth는 인증이 필요한 URL (로그인이 되어있어야 함.);

export const userAPI = {
  signUp: (request) => api.post("/member/signup", request), //회원가입
  logIn: (request) => api.post("/member/login", request), // 로그인
  logout: () => api.delete("/auth/member/logout"), // 로그아웃
  userUpdate: (request) => api.put("/auth/member/update", request), // 회원정보 수정
};

export const postAPI = {
  getPostAll: () => api.get("/post/all"), // 모든 게시글 가져오기
  getPostInfinite: (page) =>
    api.get(`/post?page=${page}&size=6&sort=createdAt,desc`), // // 게시글 가져오기(InfiniteScroll)
  writePost: (request) =>
    api.post("/auth/post", request, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    }), // 게시글 작성하기
  getPost: (postId) => api.get(`/post/${postId}`), // 게시글 하나 가져오기
  putPost: (request, postId) => api.put(`/auth/post/${postId}`, request), // 게시글 수정하기
  deletePost: (postId) => api.delete(`/auth/post/${postId}`), // 게시글 삭제하기
  likePost: (postId) => api.post(`/auth/likes/${postId}`), //좋아요
  deletelikePost: (postId) => api.delete(`/auth/likes/${postId}`), //좋아요 삭제하기
};

export const commentAPI = {
  getComment: (postId) => api.get(`/comment/${postId}`), // 댓글 불러오기
  postComment: (request, postId) =>
    api.post(`/auth/comment/${postId}`, request), // 댓글 작성하기
  putComment: (request, commentId) =>
    api.put(`/auth/comment/${commentId}`, request), // 댓글 수정하기
  deleteComment: (commentId) => api.delete(`/auth/comment/${commentId}`), // 댓글 삭제하기
};

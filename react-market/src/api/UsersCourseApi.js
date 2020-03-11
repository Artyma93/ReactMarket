import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instanceUsersCourseApi = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: { "API-KEY": "062c9fb9-ca31-49b2-b1ce-fd99fe7877c3" }
});

const getUsers = (currentPage, pageSize = 100) => {
  return instanceUsersCourseApi.get(
    `users?page=${currentPage}&&count=${pageSize}`
  );
};

const followUser = userId => {
  return instanceUsersCourseApi.post(`follow/${userId}`, {});
};

const unfollowUser = userId => {
  return instanceUsersCourseApi.delete(`follow/${userId}`);
};

const AuthMe = () => {
  return instanceUsersCourseApi.get(`auth/me`);
};

const Login = (email, password, rememberMe = false) => {
  return instanceUsersCourseApi.post(`auth/login`, {
    email,
    password,
    rememberMe
  });
};

const Logout = () => {
  return instanceUsersCourseApi.delete(`auth/login`);
};

export const UsersCourseApi = {
  getUsers: getUsers,
  followUser: followUser,
  unfollowUser: unfollowUser,
  AuthMe: AuthMe,
  Login: Login,
  Logout: Logout
};

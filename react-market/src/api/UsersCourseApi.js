import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const UsersCourseApi = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: { "API-KEY": "062c9fb9-ca31-49b2-b1ce-fd99fe7877c3" }
});

export const getUsers = (currentPage, pageSize = 100) => {
  return UsersCourseApi.get(`users?page=${currentPage}&&count=${pageSize}`);
};

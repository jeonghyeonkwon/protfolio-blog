import client from "./client";
const USER = "/account";

export const validateUserId = (userId) =>
  client.get(`${USER}/find?userId=${userId}`);

export const register = (form) => client.post(`${USER}/register`, form);

export const login = (form) => client.post(`${USER}/login`, form);

export const tokenValidate = (token) =>
  client.get(`${USER}/validate`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });

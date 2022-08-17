import client from "./client";
const USER = "/account";

export const validateUserId = (userId) =>
  client.get(`${USER}/find?userId=${userId}`);

export const register = (form) => client.post(`${USER}/register`, form);

export const login = (form) => client.post(`${USER}/login`, form);

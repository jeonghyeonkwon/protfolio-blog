import client, { loadToken } from "./client";
const BOARD = "/board";

export const boardList = (page) => client.get(`${BOARD}?page=${page}&size=7`);
export const boardDetail = (uuid) => client.get(`${BOARD}/${uuid}`);
export const boardWrite = (form) =>
  client.post(`${BOARD}`, form, {
    headers: loadToken(),
  });

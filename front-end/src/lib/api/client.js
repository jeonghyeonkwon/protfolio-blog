import axios from "axios";
const client = axios.create();

client.defaults.baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api`;

export default client;

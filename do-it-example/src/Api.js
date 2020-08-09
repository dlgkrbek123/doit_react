import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:4000/",
});
// 설정 값을 공유할 수 있게 함

export default Api;

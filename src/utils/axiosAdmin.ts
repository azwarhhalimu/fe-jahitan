import axios from "axios";
export const baseUrl = "https://jahitan.azwarbuton.biz.id/";
const axiosAdmin = axios.create({
  baseURL: baseUrl + "admin/",
  withCredentials: true,
});
axiosAdmin.interceptors.response.use((config) => {
  if (config.data.status == "expire") {
    alert("Token Expire");
    window.location.href = "/login.html";
  } else if (config.data.status == "forbidden") {
    alert("Akses fobidden. silahkan login lagi");
    window.location.href = "/login.html";
  }
  return config;
});

export default axiosAdmin;

import axios from "axios";
// export const baseUrl = "https://jahitan.azwarbuton.biz.id/";
export const baseUrl = process.env.NEXT_PUBLIC_URL;
const axiosAdmin = axios.create({
  baseURL: baseUrl + "admin/",
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
axiosAdmin.interceptors.request.use((config) => {
  const c = window.localStorage.getItem("i_token");
  if (c !== null) {
    config.headers.Authorization = "Bearer " + c;
  }

  return config;
});
axiosAdmin.interceptors.response.use((config) => {
  if (config.data.status == "expire") {
    alert("Token Expire");
    window.location.href = "/login.html";
    Promise.reject(config);
  } else if (config.data.status == "forbidden") {
    alert("Akses fobidden. silahkan login lagi");
    window.location.href = "/login.html";
    Promise.reject(config);
  }
  return config;
});

export default axiosAdmin;

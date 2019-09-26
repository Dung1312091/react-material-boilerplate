export const localStore = {
  ACCESS_TOKEN: "access-token"
};
export const setLocalStore = data => {
  localStorage.setItem(localStore.ACCESS_TOKEN, data["accessToken"]);
};
export const removeLocalStore = () => {
  localStorage.removeItem(localStore.ACCESS_TOKEN);
};
export const setHeader = () => {
  let headers = {};
  headers["Content-Type"] = "application/json";
  headers["accept"] = "application/json";
  const token = localStorage.getItem(localStore.ACCESS_TOKEN);
  if (token) {
    headers["Authorization"] = token;
  }
  return headers;
};
export const getToken = () => {
  // return localStorage.getItem(localStore.ACCESS_TOKEN);
  return true;
};

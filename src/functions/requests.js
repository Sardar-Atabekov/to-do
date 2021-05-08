// import { API } from "./../constants/API";

// dev API
import { devAPI as API } from "./../constants/API";

let token;
if (localStorage.getItem("tokenData")) {
  token = JSON.parse(localStorage.getItem("tokenData")).token;
}

async function postData(url, data) {
  data.append("token", token);
  let req = await fetch(`${API}${url}`, {
    method: "POST",
    body: data,
  });
  const res = await req.json();
  return res;
}

async function postDataNoToken(url, data) {
  let req = await fetch(`${API}${url}`, {
    method: "POST",
    body: data,
  });
  const res = await req.json();
  return res;
}

async function getDataNoToken(url) {
  let response = await fetch(`${API}${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  let body = await response.json();
  return body;
}

export { postData, postDataNoToken, getDataNoToken };

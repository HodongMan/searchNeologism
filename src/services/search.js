import axios from "axios";


export function getSearchResult(search){
//  return axios.get("http://localhost:8000/", {
//    search,
//  });
  return axios.get("https://httpbin.org/get");
}

export function setPoint(result){
  return axios.post("/url", {
    result,
  });
}

export function addSearchResult(search){
  return axios.post("/url", {
    search,
  });
}

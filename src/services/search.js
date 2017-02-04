import axios from "axios";


export function getSearchResult(search){
//  return axios.get("http://localhost:8000/", {
//    search,
//  });
  return axios.get("http://127.0.0.1:8080");
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

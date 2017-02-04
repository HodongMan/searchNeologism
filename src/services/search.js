import axios from "axios";


export function getSearchResult(search){
  return axios.post("/url", {
    search,
  });
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

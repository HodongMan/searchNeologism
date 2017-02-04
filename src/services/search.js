import axios from "axios";


export function getSearchResult(search){
//  return axios.get("http://localhost:8000/", {
//    search,
//  });
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  console.log(search);
  return axios.get("http://localhost:4000/" + search);
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

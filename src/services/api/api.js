import axios from "axios";

const api = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex",
});

export function getMovies() {
  return api.get("/movies");
}

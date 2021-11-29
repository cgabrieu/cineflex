import axios from "axios";

const api = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex",
});

export function getMovies() {
  return api.get("/movies");
}

export function getShowtimes(movieId) {
  return api.get(`/movies/${movieId}/showtimes`);
}

export function getSeats(showtimeId) {
  return api.get(`/showtimes/${showtimeId}/seats`);
}

export function postSeat(objectReservation) {
  return api.post("/seats/book-many", objectReservation);
}

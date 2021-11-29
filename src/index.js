import "./assets/styles/reset.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Movies from "./pages/Movies";
import Showtimes from "./pages/Showtimes";
import Seats from "./pages/Seats";
import Error from "./components/Error";
import Success from "./pages/Success";
import { GlobalStyle } from "./assets/styles/styles.js";
import FooterFilm from "./components/FooterFilm";
import { useState } from "react";
import { BookingContext } from "./contexts/bookingContext";

function App() {
  const [booking, setBooking] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sucesso" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Router>
        <BookingContext.Provider value={{ booking, setBooking }}>
          <Routes>
            <Route path="/filme/:movieId" element={<Showtimes />} />
            <Route path="/assentos/:showtimeId" element={<Seats />} />
          </Routes>
          <FooterFilm />
        </BookingContext.Provider>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));

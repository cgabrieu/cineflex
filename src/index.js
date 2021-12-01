import './assets/styles/reset.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Topbar from './components/Topbar';
import Movies from './pages/Movies';
import Showtimes from './pages/Showtimes';
import Seats from './pages/Seats';
import Error from './components/Error';
import Success from './pages/Success';
import { GlobalStyle } from './assets/styles/styles.js';
import FooterFilm from './components/FooterFilm';
import { BookingContext } from './contexts/bookingContext';

function App() {
  const [booking, setBooking] = useState({
    movie: '',
    showtime: '',
  });

  const bookingContext = useMemo(() => ({ booking, setBooking }), []);
  return (
    <BookingContext.Provider value={bookingContext}>
      <GlobalStyle />
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sucesso" element={<Success />} />
          <Route path="*" element={<Error />} />
          <Route
            path="/filme/:movieId"
            element={
              <>
                <Showtimes />
                <FooterFilm />
              </>
            }
          />
          <Route
            path="/assentos/:showtimeId"
            element={
              <>
                <Seats />
                <FooterFilm />
              </>
            }
          />
        </Routes>
      </Router>
    </BookingContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('.root'));

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

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Topbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/filme/:movieId" element={<Showtimes />} />
        <Route path="/assentos/:showtimeId" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));

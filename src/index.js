import "./assets/styles/reset.css";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from './components/Topbar'
import Movies from "./pages/Movies";
import Showtimes from "./pages/Showtimes";
import Seats from "./pages/Seats"
import Error from "./components/Error";
import Success from "./pages/Success";
import { GlobalStyle } from "./assets/styles/styles.js";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Topbar />
			<Switch>
				<Route exact path="/">
					<Movies />
				</Route>
				<Route exact path="/filme/:idMovie">
					<Showtimes />
				</Route>
				<Route exact path="/assentos/:idShowtime">
					<Seats />
				</Route>
				<Route exact path="/sucesso">
					<Success />
				</Route>
				<Route path="/">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));

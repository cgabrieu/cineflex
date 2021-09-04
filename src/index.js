import "./reset.css";
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from './components/Topbar'
import Movies from "./components/Movies";
import SessionsMovie from "./components/SessionsMovie";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Topbar />
			<Switch>
				<Route exact path="/">
					<Movies />
				</Route>
				<Route exact path="/filme/:idFilme">
					<SessionsMovie />
				</Route>s
			</Switch>
		</Router>
	);
}

const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Roboto", sans-serif;
		background-color: #E5E5E5;
	}
`
ReactDOM.render(<App />, document.querySelector(".root"));

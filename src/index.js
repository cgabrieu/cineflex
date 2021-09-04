import "./reset.css";
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Top from './components/Top'
import Movies from "./components/Movies";

function App() {

    const GlobalStyle = createGlobalStyle`
        body {
            font-family: "Roboto", sans-serif;
            background-color: #E5E5E5;
        }
    `

    return (
        <>  
            <GlobalStyle />
            <Top />
            <Movies />
        </>
    );
}


ReactDOM.render(<App />, document.querySelector(".root"));
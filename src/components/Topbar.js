import styled from 'styled-components';
import { IoArrowBack } from "react-icons/io5";
import { useHistory } from "react-router-dom";

export default function Topbar() {

    return (
        <Header>
            <div>
              <IoArrowBack size="48px" color="#E8833A" onClick={useHistory().goBack}/>
            </div>
            <h1>CINEFLEX</h1>
        </Header>
    );

}

const Header = styled.div`
  position: fixed;
  top: 0; right: 0; left: 0;
  background-color: #C3CFD9;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 34px;
    color: #E8833A;
  }

  div {
    position: absolute;
    top: 10px;
    left: 5px;
  }
`
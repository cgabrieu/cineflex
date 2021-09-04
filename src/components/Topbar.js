import styled from 'styled-components';

export default function Topbar() {

    return (
        <Header>
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
`
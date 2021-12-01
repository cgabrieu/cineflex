import styled, { createGlobalStyle } from 'styled-components';

export const TitlePage = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 130px;
  margin-bottom: 36px;
`;

export const ContainerCenter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #0d1c32;
  margin-right: 10px;
  color: #ff9505;
  border: none;
  font-size: 18px;
  border-radius: 3px;
  padding: 10px 20px;
  margin-top: 7px;
  width: 150px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: 150px;
  > div {
    background-color: black;
    padding: 10px 10px 25px 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #ff9505;
    margin-bottom: 25px;
    animation: opacityScale 1s;
  }
`;

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Roboto", sans-serif;
		background-color: #0d1c32;
    overflow: scroll;
    overflow-x: hidden;
	}
	h1, h2 {
		color:#FF9505;
    text-transform: uppercase;
    font-weight: bold;
	}
  h3 {
    color:#FF9505;
    font-weight: bold;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
      background: #FF0000;
  }

  @keyframes moveToUpFooter {
    0% {
      transform: translateY(300px);
    }

    100% {
        transform: translate(0);
    }
  }

  @keyframes opacityScale {
    0% {
      opacity: 0;
      transform: scale(0.93);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

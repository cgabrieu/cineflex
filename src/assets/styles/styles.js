import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const TitlePage = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: calc(10% + 64px);
  margin-bottom: 36px;
`;

export const ContainerCenter = styled.div`
  position: absolute;
	top: 0; bottom: 0; right: 0; left: 0;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
    background-color: #E8833A;
    margin-right: 10px;
    color: #FFF;
    border: none;
    font-size: 18px;
    border-radius: 3px;
    padding: 10px 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: 150px;
`;

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Roboto", sans-serif;
		background-color: #0d1c32;
	}
	h1, h2 {
		color:#FF9505;
    text-transform: uppercase;
    font-weight: bold;
	}
`;
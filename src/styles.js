import styled from "styled-components";

const TitlePage = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: calc(10% + 64px);
  margin-bottom: 36px;
`;

const ContainerCenter = styled.div`
  position: absolute;
	top: 0; bottom: 0; right: 0; left: 0;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
    background-color: #E8833A;
    margin-right: 10px;
    color: #FFF;
    border: none;
    font-size: 18px;
    border-radius: 3px;
    padding: 10px 20px;
`;

export {
    TitlePage,
    ContainerCenter,
    Button,
}
import styled from "styled-components";

const TitlePage = styled.h1`
  text-align: center;
  color: #293845;
  font-size: 24px;
  margin-top: 117px;
  margin-bottom: 50px;
`;

const ContainerCenter = styled.div`
  position: absolute;
	top: 0; bottom: 0; right: 0; left: 0;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`

export {
    TitlePage,
    ContainerCenter,
}
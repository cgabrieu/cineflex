import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Cineflex } from "../assets/icons/cineflex-logo.svg";
import { useLocation } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <Header>
      {(useLocation().pathname !== '/') && <GoBackIcon color="#ff9505" onClick={() => navigate(-1)} />}
      <CineflexLogo onClick={() => navigate("/")}/>
    </Header>
  );
}

const CineflexLogo = styled(Cineflex)`
  width: 200px;
  height: 130px;
  cursor: pointer;
  @media (max-width: 330px) {
    width: 100px;
  }
`;

const GoBackIcon = styled(IoArrowBack)`
  font-size: 45px;
  position: absolute;
  top: 10px;
  left: 15px;
  background-color: #0D1C32;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #000;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 0px #ff9505;
`;

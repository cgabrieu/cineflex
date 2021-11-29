import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Cineflex } from "../assets/icons/cineflex-logo.svg";

export default function Topbar() {

  const navigate = useNavigate();

  return (
    <Header>
      <GoBackIcon color="#ff9505" onClick={() => navigate(-1)} />
      <CineflexLogo />
    </Header>
  );
}

const CineflexLogo = styled(Cineflex)`
  width: 200px;
`;

const GoBackIcon = styled(IoArrowBack)`
  font-size: 45px;
  position: absolute;
  top: 10px;
  left: 5px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
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
  box-shadow: 0px 0px 23px 0px #ff9505;
`;

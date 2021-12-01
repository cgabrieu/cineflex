import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { TitlePage, Button } from '../assets/styles/styles';
import { BookingContext } from '../contexts/bookingContext';
import { ReactComponent as TicketLogo } from '../assets/icons/ticket.svg';

export default function Success() {
  const { booking } = useContext(BookingContext);

  const { movie, showtime, buyers } = booking;

  return (
    <>
      <TitlePageSuccess>Pedido feito com sucesso!</TitlePageSuccess>
      <ContainerSuccess>
        <TitleSection>Filme e sessão</TitleSection>
        <ImageMovie src={movie.posterURL} />
        <br />
        <ContainerInfo>
          <p>{movie.title}</p>
          <p>{`${showtime.day.weekday} - ${showtime.day.date}`}</p>
          <p>{`${showtime.name}`}</p>
        </ContainerInfo>
        <TitleSection>Ingressos</TitleSection>
        {buyers.map((b) => (
          <Ticket key={b.idAssento}>
            <div>
              <h2>Assento {b.seatName}</h2>
              <p>Nome: {b.nome}</p>
              <p>CPF: {b.cpf}</p>
            </div>
            <TicketStyledLogo />
          </Ticket>
        ))}
        <Link to="/">
          <ButtonHome>Voltar para Home</ButtonHome>
        </Link>
      </ContainerSuccess>
    </>
  );
}

const TicketStyledLogo = styled(TicketLogo)`
  width: 90px;
`;

const Ticket = styled.div`
  width: 350px;
  border: 1px solid #ff9505;
  border-radius: 3px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  p {
    color: #f3b830;
    line-height: 20px;
  }
  h2 {
    margin-bottom: 5px;
  }
  @media (max-width: 375px) {
    width: 300px;
  }
`;

const ImageMovie = styled.img`
  max-width: 250px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 0px #ff9505;
`;

const ContainerSuccess = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 80px;
  animation: opacityScale 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  box-shadow: 0px 0px 5px 0px #ff9505;
  border-radius: 5px;
  @media (max-width: 420px) {
    border-radius: 0px;
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f3b830;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 30px;
`;

const TitlePageSuccess = styled(TitlePage)`
  color: #ff9505;
  font-weight: bold;
  font-size: 25px;
`;

const TitleSection = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 24px;
`;

const ButtonHome = styled(Button)`
  width: 200px;
  margin: 30px 0 10px 0;
`;

import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { TitlePage, Button, Container } from "../assets/styles/styles";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FooterFilm from "../components/FooterFilm";
import Seat from "../components/Seat";
import InputsBuyer from "../components/InputsBuyer";
import { getSeats } from "../services/api/api";
import { BookingContext } from "../contexts/bookingContext";

let buyers = [];

export default function Seats() {
  const [seatsList, setSeatsList] = useState(null);

  const { showtimeId } = useParams();
  const navigate = useNavigate();
  const { booking, setBooking } = useContext(BookingContext);

  useEffect(() => {
    getSeats(showtimeId)
      .then((res) => {
        const seats = res.data.seats.map((seat) => seat);
        setBooking({
          ...booking,
          showtime: res.data,
        });
        setSeatsList(seats);
      })
      .catch(() => {
        setSeatsList([]);
      });
  }, []);

  if (seatsList === null) return <Loading />;
  else if (seatsList.length === 0) return <Error />;

  const selectSeat = (index) => {
    const stateSeat = seatsList[index].isAvailable;

    if (stateSeat === false) {
      alert("Esse assento não está disponível.");
      return;
    }
    if (stateSeat) seatsList[index].isAvailable = null;
    else seatsList[index].isAvailable = true;

    setSeatsList([...seatsList]);
  };

  const selectedSeats = seatsList.filter((e) => e.isAvailable === null);

  /*   const getReservationObject = () => {
    return {
      ids: selectedSeats.map((e) => e.id),
      compradores: buyers,
    };
  }; */

  const updateBuyers = (index, idAssento, name, CPF) => {
    const object = { idAssento: idAssento, nome: name, cpf: CPF };

    if (buyers.indexOf[index] === -1) buyers.push(object);
    else buyers[index] = object;
  };

  return (
    <Container>
      <TitlePage>Selecione o(s) assentos(s)</TitlePage>
    
        <div>
      <ScreenContainer>TELA</ScreenContainer>
      <ContainerSeats>
        {seatsList.map(({ id, name, isAvailable }, index) => (
          <li key={index} onClick={() => selectSeat(index)}>
            <Seat id={id} available={isAvailable}>
              {name}
            </Seat>
          </li>
        ))}
      </ContainerSeats>

      <ContainerOptions>
        <Seat available={null} showText />
        <Seat available={true} showText />
        <Seat available={false} showText />
      </ContainerOptions>
      </div>
      <br />
      {selectedSeats.map((e, index) => (
        <InputsBuyer
          key={index}
          index={index}
          seat={e}
          updateBuyers={updateBuyers}
        />
      ))}

      {selectedSeats.length > 0 ? (
        <ButtonReservation onClick={() => navigate("/sucesso")}>
          Reservar assento(s)
        </ButtonReservation>
      ) : (
        ""
      )}
    </Container>
  );
}

const ScreenContainer = styled.div`
  width: 345px;
  height: 15px;
  margin-bottom: 5px;
  background-color: white;
  color: black;
  font-weight: bold;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 3px;
`;

const ContainerSeats = styled.ul`
  width: 350px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  animation: opacityScale 1s;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
`;

const ContainerOptions = styled(ContainerSeats)`
  height: auto;
  width: 100%;
  justify-content: space-around;
  padding: 0 10%;
  margin-top: 5px;
`;

const ButtonReservation = styled(Button)`
  margin-top: 10px;
  width: 210px;
  background-color: #000;
  box-shadow: 0px 0px 5px 0px #ff9505;
`;

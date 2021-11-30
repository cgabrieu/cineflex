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

export default function Seats() {
  const [seatsList, setSeatsList] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(null);

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
      .catch(() => setSeatsList([]));
  }, []);

  if (seatsList === null) return <Loading />;
  else if (seatsList.length === 0) return <Error />;

  /*   const getReservationObject = () => {
    return {
      ids: selectedSeats.map((e) => e.id),
      compradores: buyers,
    };
  }; */

  function handleSelectSeat({ seatId }) {
    if (!selectedSeats) {
      setSelectedSeats({
        ids: [seatId],
        compradores: [{ idAssento: seatId, nome: "", cpf: "" }],
      });
      return;
    }

    if (selectedSeats.ids.includes(seatId)) {
      setSelectedSeats({
        ids: selectedSeats.ids.filter((s) => s !== seatId),
        compradores: selectedSeats.compradores.filter(
          (s) => s.idAssento !== seatId
        ),
      });
      return;
    }

    setSelectedSeats({
      ids: [...selectedSeats.ids, seatId],
      compradores: [
        ...selectedSeats.compradores,
        { idAssento: seatId, nome: "", cpf: "" },
      ],
    });
  }

  console.log(selectedSeats);

  return (
    <Container>
      <TitlePage>Selecione o(s) assentos(s)</TitlePage>

      <div>
        <ScreenContainer>TELA</ScreenContainer>
        <ContainerSeats>
          {seatsList.map(({ id, name, isAvailable }, index) => (
            <li key={index} onClick={() => handleSelectSeat({ seatId: id })}>
              <Seat available={isAvailable}>{name}</Seat>
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
      {/* {selectedSeats.map((e, index) => (
        <InputsBuyer
          key={index}
          index={index}
          seat={e}
          setBuyers={setBuyers}
        />
      ))}

      {selectedSeats.length ? (
        <ButtonReservation
          onClick={() => {
            
            navigate("/sucesso");
          }}
        >
          Reservar assento(s)
        </ButtonReservation>
      ) : (
        ""
      )} */}
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
  display: flex;
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

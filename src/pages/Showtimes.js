import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { TitlePage, Button } from "../assets/styles/styles";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FooterFilm from "../components/FooterFilm";
import { getShowtimes } from "../services/api/api";

export default function Showtimes() {
  const [showtimesInfo, setShowtimesInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getShowtimes(movieId)
      .then((res) => setShowtimesInfo(res.data))
      .catch(() => setShowtimesInfo([]));
  }, []);

  if (showtimesInfo === null) return <Loading />;
  else if (showtimesInfo.length === 0) return <Error />;

  return (
    <>
      <TitlePage>Selecione o horário</TitlePage>
      <ContainerShowtimes>
        {showtimesInfo.days.map((e, index) => (
          <Showtime
            key={index}
            weekday={e.weekday}
            date={e.date}
            showtimes={e.showtimes}
          />
        ))}
      </ContainerShowtimes>
      <FooterFilm film={showtimesInfo} />
    </>
  );
}

const Showtime = ({ weekday, date, showtimes }) => {
  const navigate = useNavigate();
  return (
    <ContainerShowtime>
      <DayInfoShowtime>{weekday + " - " + date}</DayInfoShowtime>
      {showtimes.map(({ name: time, id }, index) => (
        <Button key={index} onClick={() => navigate(`/assentos/${id}`)}>
          {time}
        </Button>
      ))}
    </ContainerShowtime>
  );
};

const ContainerShowtimes = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 150px;
`;

const ContainerShowtime = styled.div`
  margin: 0 auto;
  margin-bottom: 25px;
  background-color: #000;
  max-width: 280px;
  padding: 15px 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  box-shadow: 0px 0px 8px 0px #ff9505;
`;

const DayInfoShowtime = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`;

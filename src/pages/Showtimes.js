import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TitlePage, Button } from '../assets/styles/styles';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { getShowtimes } from '../services/api/api';
import { BookingContext } from '../contexts/bookingContext';

export default function Showtimes() {
  const [showtimesInfo, setShowtimesInfo] = useState(null);
  const { movieId } = useParams();

  const { setBooking } = useContext(BookingContext);

  useEffect(() => {
    getShowtimes(movieId)
      .then((res) => {
        setShowtimesInfo(res.data);
        setBooking({
          movie: res.data,
        });
      })
      .catch(() => setShowtimesInfo([]));
  }, []);

  if (showtimesInfo === null) return <Loading />;
  if (showtimesInfo.length === 0) return <Error />;

  return (
    <>
      <TitlePage>Selecione o horário</TitlePage>
      <ContainerShowtimes>
        {showtimesInfo.days.map((e) => (
          <Showtime key={e.id} weekday={e.weekday} date={e.date} showtimes={e.showtimes} />
        ))}
      </ContainerShowtimes>
    </>
  );
}

const Showtime = ({ weekday, date, showtimes }) => {
  const navigate = useNavigate();

  return (
    <ContainerShowtime>
      <DayInfoShowtime>{`${weekday} - ${date}`}</DayInfoShowtime>
      {showtimes.map(({ name: time, id }) => (
        <Button key={id} onClick={() => navigate(`/assentos/${id}`)}>
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
  animation: opacityScale 1s;
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

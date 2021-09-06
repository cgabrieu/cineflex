import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TitlePage, Button } from '../styles';
import { URL_API } from '../consts';
import { useParams, Link } from "react-router-dom";
import Loading from '../components/Loading';
import Error from '../components/Error';
import FooterFilm from '../components/FooterFilm';

export default function Showtimes() {

    const [showtimesInfo, setShowtimesInfo] = useState(null);
    const { idMovie } = useParams();

    useEffect(() => {
        axios.get(`${URL_API}/movies/${idMovie}/showtimes`)
            .then((response) => {
                setShowtimesInfo(response.data);
            })
            .catch(() => {
                setShowtimesInfo([]);
            });
    }, []);

    if (showtimesInfo === null) return <Loading />;
    else if (showtimesInfo.length === 0) return <Error />;

    return (
        <>
            <TitlePage>Selecione o horário</TitlePage>
            {showtimesInfo.days.map((e, index) => <Showtime key={index} weekday={e.weekday} date={e.date} showtimes={e.showtimes} /> )}
            <FooterFilm film={showtimesInfo}/>
        </>
    );
}


const Showtime = ({ weekday, date, showtimes }) => (
    <ContainerShowtime>
        <DayInfoShowtime>{weekday + " - " + date}</DayInfoShowtime>
        {showtimes.map(({ name: time, id }, index) =>
            <Button key={index}>
                <Link to={"/assentos/" + id}>
                    {time}
                </Link>
            </Button>
        )}
    </ContainerShowtime>
);

const ContainerShowtime = styled.div`
    margin: 0 0 25px 25px;
`

const DayInfoShowtime = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
`
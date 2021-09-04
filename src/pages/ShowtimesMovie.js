import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { TitlePage } from '../styles';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { URL_API } from '../consts';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function ShowtimesMovie() {

    const [listShowtime, setListShowtime] = useState(null);
    const { idMovie } = useParams();

    useEffect(() => {
        axios.get(`${URL_API}/${idMovie}/showtimes`)
            .then((response) => {
                console.log(response.data);
                setListShowtime(response.data);
            })
            .catch(() => {
                setListShowtime([]);
            });
    }, []);

    if (listShowtime === null) return <Loading />;
    else if (listShowtime.length === 0) return <Error />

    return (
        <>
            <TitlePage>Selecione o horário</TitlePage>
            {listShowtime.days.map((e) => <Showtimes weekday={e.weekday} date={e.date} showtimes={e.showtimes} /> )}
        </>
    );
}


const Showtimes = ({ weekday, date, showtimes }) => (
    <ContainerShowtime>
        <DayInfoShowtime>{weekday + " - " + date}</DayInfoShowtime>
        {showtimes.map(({ name: time }) =>
            <ButtonShowtime>{time}</ButtonShowtime>
        )}
    </ContainerShowtime>
);

const ContainerShowtime = styled.div`
    margin: 0 0 25px 25px;
`

const DayInfoShowtime = styled.h2`
    font-size: 20px;
    color: #293845;
    margin-bottom: 20px;
`

const ButtonShowtime = styled.button`
    background-color: #E8833A;
    margin-right: 10px;
    color: #FFF;
    border: none;
    font-size: 18px;
    border-radius: 3px;
    padding: 10px 20px;
`
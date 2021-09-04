import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { TitlePage } from '../styles';
import Loading from './Loading';
import { URL_API } from '../consts';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function ShowtimesMovie() {

    const [listShowtime, setListShowtime] = useState(null);
    const { idMovie } = useParams();

    useEffect(() => {
        axios.get(`${URL_API}/${idMovie}/showtimes`).then(response => {
            console.log(response.data);
            setListShowtime(response.data);
        });
    }, []);

    if (listShowtime === null) return <Loading />;

    return (
        <>
            <TitlePage>Selecione o horário</TitlePage>
            {listShowtime.days.map((e) => {
                return (
                    <BoxShowtime>
                        <DayInfoShowtime>{e.weekday + " - " + e.date}</DayInfoShowtime>
                        {e.showtimes.map(({name: time}) => 
                            <ButtonShowtime>{time}</ButtonShowtime>
                        )}
                    </BoxShowtime>
                );
            })}
        </>
    );
}

const BoxShowtime = styled.div`
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
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { TitlePage } from '../styles';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { URL_API } from '../consts';
import { useParams } from "react-router-dom";
import axios from 'axios';
import FooterFilm from '../components/FooterFilm';
import Seat from '../components/Seat';

export default function Seats() {

    const [seatsInfo, setSeatsInfo] = useState(null);
    const { idShowtime } = useParams();

    useEffect(() => {
        axios.get(`${URL_API}/showtimes/${idShowtime}/seats`)
            .then((response) => {
                console.log(response.data);
                setSeatsInfo(response.data);
            })
            .catch(() => {
                setSeatsInfo([]);
            });
    }, []);

    if (seatsInfo === null) return <Loading />;
    else if (seatsInfo.length === 0) return <Error />;

    return (
        <>
            <TitlePage>Selecione o(s) assentos(s)</TitlePage>

            <ContainerSeats>
                {seatsInfo.seats.map(({ name, isAvailable }, index) =>
                    <Seat key={index} available={isAvailable}>{name}</Seat>
                )}
            </ContainerSeats>


            <ContainerOptions>
                <Seat available={null} showText />
                <Seat available={true} showText />
                <Seat available={false} showText />
            </ContainerOptions>
            <FooterFilm film={seatsInfo} />
        </>
    );
}

const ContainerSeats = styled.div`
    width: 350px;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    div {
        margin: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 13px;
    }
`

const ContainerOptions = styled(ContainerSeats)`
    height: auto;
    width: 100%;
    justify-content: space-around;
    padding: 0 10%;
    margin-top: 5px;
    flex-wrap: wrap;
    p {
        margin-top: 7px;
        color:#4E5A65;
    }
`;
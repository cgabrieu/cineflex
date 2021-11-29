import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { TitlePage, Button, Container } from '../assets/styles/styles';
import { useParams, Link } from "react-router-dom";
import Loading from '../components/Loading';
import Error from '../components/Error';
import FooterFilm from '../components/FooterFilm';
import Seat from '../components/Seat';
import InputsBuyer from '../components/InputsBuyer'
import { getSeats } from '../services/api/api';

let buyers = [];

export default function Seats() {
    const [seatsList, setSeatsList] = useState(null);
    const [footerInfo, setFooterInfo] = useState([]);

    const { showtimeId } = useParams();

    useEffect(() => {
        getSeats(showtimeId).then((res) => {
            const seats = res.data.seats.map((seat) => seat);
            setFooterInfo(res.data);
            setSeatsList(seats);
        }).catch(() => {
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
        };
        if (stateSeat) seatsList[index].isAvailable = null;
        else seatsList[index].isAvailable = true;

        setSeatsList([...seatsList])
    }

    const selectedSeats = seatsList.filter((e) => e.isAvailable === null);

    const getReservationObject = () => {
        const objectReservation = {
            ids: selectedSeats.map((e) => e.id),
            compradores: buyers
        }
        return objectReservation;
    }

    const updateBuyers = (index, idAssento, name, CPF) => {
        const object = { idAssento: idAssento, nome: name, cpf: CPF }

        if (buyers.indexOf[index] === -1) buyers.push(object);
        else buyers[index] = object;
    }

    return (
        <Container>
            <TitlePage>Selecione o(s) assentos(s)</TitlePage>

            <ContainerSeats>
                {seatsList.map(({ id, name, isAvailable }, index) =>
                    <li key={index} onClick={() => selectSeat(index)}>
                        <Seat id={id} available={isAvailable}>
                            {name}
                        </Seat>
                    </li>
                )}
            </ContainerSeats>

            <ContainerOptions>
                <Seat available={null} showText />
                <Seat available={true} showText />
                <Seat available={false} showText />
            </ContainerOptions>
            <br />
            {selectedSeats.map((e, index) => (
                <InputsBuyer key={index} index={index} seat={e} updateBuyers={updateBuyers}/>
            ))}
            
            {(selectedSeats.length > 0) ?
                <ButtonReservation>
                    <Link
                        to={{
                            pathname: "/sucesso",
                            state: {
                                objectReservation: getReservationObject(),
                                filmInfo: footerInfo,
                                seatsInfo: selectedSeats
                            },
                        }}>
                        Reservar assento(s)
                    </Link>
                </ButtonReservation> : ""}

            <FooterFilm film={footerInfo} />
        </Container>
    );
}

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
    margin-top: 40px;
    max-width: 250px;
`;
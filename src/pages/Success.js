import styled from 'styled-components';
import { URL_API } from '../consts';
import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { TitlePage, Button } from '../styles';

export default function Success() {

    const { objectReservation, filmInfo, seatsInfo } = useLocation().state;
    const [isSent, setIsSent] = useState(null);
  
    useEffect(() => {
      axios.post(URL_API + "/seats/book-many", objectReservation)
        .then(() => setIsSent(true))
        .catch(() => setIsSent(false));
    }, []);
  
    if (isSent === null) return <Loading />;
    else if (isSent === false) return <Error />;
    
    return (
      <>
        <TitlePageSuccess>Pedido feito com sucesso!</TitlePageSuccess>
        <ContainerSuccess>
            <div>
                <TitleSection>Filme e sessão</TitleSection>
                {filmInfo.movie.title}
                <br/>
                {filmInfo.day.date} {filmInfo.name}
            </div>
            <div>
                <TitleSection>Ingressos</TitleSection>
                {seatsInfo.map((e, index) => (
                    <p key={index}>{`Assento ${e.name}`}</p>
                ))}
            </div>
            <div>
                <TitleSection>Compradores</TitleSection>
                {objectReservation.compradores.map((e, index) => (
                    <div key={index}>
                        <h2>Comprador {index+1}</h2>
                        <p>Nome: {e.nome}</p>
                        <p>CPF: {e.cpf}</p>
                    </div>
                ))}
            </div>
            <div>
                <ButtonHome>
                    <Link to="/">Voltar para Home</Link>
                </ButtonHome>
            </div>
        </ContainerSuccess>
      </>
    );
  }

const ContainerSuccess = styled.div`
    margin: 0 35px;
    div {
        font-size: 22px;
        display: flex;
        color:#293845;
        justify-content: left;
        flex-direction: column;
        margin-bottom: 40px;
        line-height: 26px;

        div {
            margin-bottom: 0px;
            h2 {
                margin: 15px 0 5px 0;
                font-weight: bold;
                font-size: 18px;
            }
        }

    }
`

const TitlePageSuccess = styled(TitlePage)`
    color: #247A6B;
    font-weight: bold;
`

const TitleSection = styled.h1`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 24px;
`

const ButtonHome = styled(Button)`
    max-width: 225px;
    margin: 0 auto;
`
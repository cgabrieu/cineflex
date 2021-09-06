import styled from "styled-components";
import React, { useState } from 'react';

export default function InputsBuyer({seat, index, updateBuyers}) {
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");

    updateBuyers(index, seat.id, name, CPF);

    return (
        <>
            <ContainerInput>
                <h3>{`${index+1}º Ingresso`}</h3>
                <p>Nome do comprador: </p>
                <input 
                    placeholder="Digite seu nome..."
                    onChange= {(e) => setName(e.target.value)}
                    value={name}
                />
                <p>CPF do comprador: </p>
                <input 
                    placeholder="Digite seu CPF..."
                    onChange= {(e) => setCPF(e.target.value)}
                    pattern = "[0-9]{11}"
                    value={CPF}
                />
            </ContainerInput>
        </>
    );
}

const ContainerInput = styled.div`
    width: 330px;
    height: 200px;
    margin: 5px auto 0 auto;
    h3 {
        font-size: 20px;
        text-align: center;
        color:#293845;
        margin: 20px 0 10px 0;
    }
    input {
        width: 100%;
        height: 50px;
        outline: none;
        padding-left: 15px;
        border-radius: 3px;
        &::placeholder {
            color: #AFAFAF;
            font-size: 18px;
        }
    }
    p {
        font-size: 18px;
        color:#293845;
        margin: 7px 0 3px 0;
    }
`
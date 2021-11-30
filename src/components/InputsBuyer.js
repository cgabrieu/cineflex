import styled from "styled-components";
import React, { useState } from 'react';
import { cpfMask } from './CPFMask'

export default function InputsBuyer({ seat }) {
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");

    return (
        <ContainerInput>
            <h3>{`Assento ${seat.name}`}</h3>
            <p>Nome do espectador: </p>
            <input
                placeholder="Digite seu nome..."
                onChange= {(e) => setName(e.target.value)}
                maxLength={35}
                minLength={5}
                value={name}
            />
            <p>CPF do espectador: </p>
            <input
                placeholder="Digite seu CPF..."
                onChange= {(e) => setCPF(e.target.value)}
                maxLength={14}
                value={cpfMask(CPF)}
            />
        </ContainerInput>
    );
}

const ContainerInput = styled.div`
    width: 330px;
    height: 200px;
    margin: 5px auto 0 auto;
    h3 {
        font-size: 20px;
        text-align: center;
        color:#ff9505;
        margin-bottom: 0px;

    }
    input:invalid {
        border:1px solid red;
    }
    input {
        width: 100%;
        height: 50px;
        outline: none;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 15px;
        &::placeholder {
            color: #AFAFAF;
            font-size: 18px;
        }
    }
    p {
        font-size: 18px;
        color:#ff9505;
        margin: 7px 0 3px 0;
    }
`
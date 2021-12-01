import styled from 'styled-components';
import React from 'react';
import cpfMask from '../utils/CPFMask.js';

export default function InputsBuyer({ buyerInfo, setBuyerInfo, index, seatName }) {
  return (
    <ContainerInput>
      <h3>{`Assento nº ${seatName}`}</h3>
      <p>Nome do espectador: </p>
      <input
        placeholder="Digite seu nome..."
        onChange={(e) => {
          setBuyerInfo(
            buyerInfo.map((b, bIndex) =>
              bIndex === index ? { ...buyerInfo[bIndex], nome: e.target.value } : b
            )
          );
        }}
        maxLength={35}
        minLength={5}
        value={buyerInfo[index].nome}
      />
      <p>CPF do espectador: </p>
      <input
        placeholder="Digite seu CPF..."
        onChange={(e) => {
          setBuyerInfo(
            buyerInfo.map((b, bIndex) =>
              bIndex === index ? { ...buyerInfo[bIndex], cpf: e.target.value } : b
            )
          );
        }}
        maxLength={14}
        value={cpfMask(buyerInfo[index].cpf)}
      />
    </ContainerInput>
  );
}

const ContainerInput = styled.div`
  width: 310px;
  height: 200px;
  h3 {
    font-size: 20px;
    text-align: center;
    color: #ff9505;
    margin-bottom: 0px;
  }
  input {
    width: 100%;
    height: 50px;
    outline: none;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 15px;
    font-size: 18px;
    &::placeholder {
      color: #afafaf;
    }
  }
  p {
    font-size: 18px;
    color: #ff9505;
    margin: 7px 0 3px 0;
  }
`;

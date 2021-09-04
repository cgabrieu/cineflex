import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_API } from './Consts';

export default function Movies() {

  const [listMovies, setListMovies] = useState(null);

  useEffect(() => {
    axios.get(URL_API).then(response => {
      setListMovies(response.data);
    });
  }, []);

  if (listMovies === null) {
    return (
      <h1>CARREGANDO...</h1>
    );
  }

  return (
    <>
      <TitleHome>Selecione o filme</TitleHome>
      <ListMovies>
        {listMovies.map((e) => <li> <Movie movie={e} /> </li>)}
      </ListMovies>
    </>
  );

}

const ListMovies = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Movie = ({movie}) => 
  <Card>
    <img src={movie.posterURL} alt={movie.title} />
  </Card>;

const Card = styled.div`
  width: 145px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  margin: 5px 15px;

  img {
    width: 130px;
  }

`

const TitleHome = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 117px;
  margin-bottom: 50px;
`;
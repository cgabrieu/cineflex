import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { URL_API } from '../consts';
import Loading from '../components/Loading';
import { TitlePage } from '../styles';

export default function Movies() {

  const [listMovies, setListMovies] = useState(null);

  useEffect(() => {
    axios.get(URL_API).then(response => {
      setListMovies(response.data);
    });
  }, []);

  if (listMovies === null) return <Loading />;

  return (
    <>
      <TitlePage>Selecione o filme</TitlePage>
      <ListMovies>
        {listMovies.map((e) => <li> <Movie movie={e} /> </li>)}
      </ListMovies>
    </>
  );

}

const Movie = ({movie}) => 
  <Card>
    <Link to={"/filme/"+movie.id}>
      <img src={movie.posterURL} alt={movie.title} />
    </Link>
  </Card>;

const ListMovies = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

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
`;
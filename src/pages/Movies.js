import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { TitlePage } from '../assets/styles/styles';
import { getMovies } from '../services/api/api';

export default function Movies() {
  const [listMovies, setListMovies] = useState(null);

  useEffect(() => {
    getMovies()
      .then((res) => setListMovies(res.data))
      .catch(() => setListMovies([]));
  }, []);

  if (listMovies === null) return <Loading />;
  if (listMovies.length === 0) return <Error />;

  return (
    <>
      <TitlePage>Selecione o filme</TitlePage>
      <ListMovies>
        {listMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ListMovies>
    </>
  );
}

const Movie = function ({ movie }) {
  const navigate = useNavigate();
  return (
    <Card>
      <ImageMovie
        src={movie.posterURL}
        alt={movie.title}
        onClick={() => navigate(`/filme/${movie.id}`)}
      />
    </Card>
  );
};

const ListMovies = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  animation: opacityScale 1s;
`;

const Card = styled.div`
  width: 145px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 1px #ff9505;
  margin: 10px;
  border-radius: 3px;
  background-color: #c3cfd9;
  cursor: pointer;
`;

const ImageMovie = styled.img`
  width: 134px;
`;

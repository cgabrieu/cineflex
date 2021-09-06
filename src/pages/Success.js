import { URL_API } from '../consts';
import { useLocation } from "react-router-dom";
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
        <TitlePage>SUCESSO!</TitlePage>
        {console.log(objectReservation)}
        {console.log(filmInfo)}
        {console.log(seatsInfo)}

      </>
    );
  
  }
import { useContext } from "react";
import styled from "styled-components";
import { BookingContext } from "../contexts/bookingContext";

export default function FooterFilm() {
  const { booking } = useContext(BookingContext);

  const { movie, showtime } = booking;
  
  console.log(booking);

  return (
    <Footer>
      <Card>
        <ImageMovie src={movie.posterURL} alt={movie.title} />
      </Card>
      <h3>
        {movie.title}
        <br />
        {showtime && `${showtime.day.weekday} - ${showtime.name}`}
      </h3>
    </Footer>
  );
}

const Footer = styled.div`
  animation: moveToUpFooter 0.7s;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 115px;
  background-color: #000;
  padding: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px 0px #ff9505;

  h3 {
    margin-left: 15px;
    font-size: 20px;
    line-height: 25px;
  }
`;

const Card = styled.div`
  width: 64px;
  height: 90px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageMovie = styled.img`
  width: 57px;
`;

import styled from "styled-components";

export default function FooterFilm({ film }) {
    return (
        <Footer>
            {film.movie === undefined ?
                <>
                    <Card><img src={film.posterURL} alt={film.title} /></Card>
                    <h1>{film.title}</h1>
                </> :
                <>
                    <Card><img src={film.movie.posterURL} alt={film.movie.title} /></Card>
                    <h1>
                        {film.movie.title}
                        <br/>
                        {film.day.weekday+" - "+film.name}
                    </h1>
                    
                </>}
        </Footer>
    );
}

const Footer = styled.div`
    position: fixed;
    bottom: 0; right: 0; left: 0;
    height: 115px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    padding: 15px;
    display: flex;
    align-items: center;

    h1 {
        margin-left: 15px;
        font-size: 24px;
    }
`
const Card = styled.div`
    width: 64px;
    height: 90px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    
    img {
        width: 48px;
    }
`
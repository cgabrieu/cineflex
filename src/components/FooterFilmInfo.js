export default function FooterFilmInfo() {

    return (
        <>
            <TitlePage>Selecione o filme</TitlePage>
            <ListMovies>
                {listMovies.map((e) => <li> <Movie movie={e} /> </li>)}
            </ListMovies>
        </>
    );

}
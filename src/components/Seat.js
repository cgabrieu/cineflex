import styled from "styled-components";

const Seat = ({ available, showText, children: name }) => {
    let color = "#C3CFD9";
    let borderColor = "#808F9D";
    let text = "Disponível"

    if (available === null) {
        color = "#8DD7CF";
        borderColor = "#1AAE9E";
        text = "Selecionado";
    } else if (!available) {
        color = "#FBE192";
        borderColor = "#F7C52B";
        text = "Indisponível"
    }

    return (
        <SeatStyle color={color} borderColor={borderColor}>
            {name}
            {showText && <p>{text}</p>}
        </SeatStyle>
    );
}

const SeatStyle = styled.div`
    margin: 5px;
    width: 25px;
    height: 25px;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ color }) => color};
    border: 1px solid ${({ borderColor }) => borderColor};
    border-radius: 50%;
    p {
        font-size: 13px;
        margin-top: 50px;
        color:#4E5A65;
    }
`;

export default Seat;
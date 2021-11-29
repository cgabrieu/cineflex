import styled from "styled-components";

const Seat = ({ available, showText, children: name }) => {
    let color = "#8DD7CF";
    let borderColor = "#1AAE9E";
    let text = "Disponível"

    if (available === null) {
        color = "#ff9505";
        borderColor = "#e69916";
        text = "Selecionado";
    } else if (!available) {
        color = "#ef4a4a";
        borderColor = "#f73b3b";
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
    border-radius: 5px;
    p {
        font-size: 14px;
        margin-top: 50px;
        color:#ff9505;
    }
`;

export default Seat;
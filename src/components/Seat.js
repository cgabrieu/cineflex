import styled from "styled-components";

const Seat = ({ available, showText, children }) => {
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
        <li>
            <SeatStyle color={color} borderColor={borderColor}>
                {children}
            </SeatStyle>
            {showText && <p>{text}</p>}
        </li>
    );
}

const SeatStyle = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    background-color: ${({ color }) => color};
    border: 1px solid ${({ borderColor }) => borderColor};
    border-radius: 50%;
`;

export default Seat;
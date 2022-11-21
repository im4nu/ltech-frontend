import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    background-color: #404040;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #f2f2f2;
    font-size: 16px;

    width: 210px;
    height: 55px;
    border-radius: 6px;
    margin-top: 5vh;
    transition: all ease 0.5s;
            :hover{
            transition: all ease 0.5s;
            transform: scale(1.02);
            cursor: pointer;
            }
            @media (max-width: 1366px) {
                width: 200px;
                height: 50px;
                font-size: 14px;
            }
    `;

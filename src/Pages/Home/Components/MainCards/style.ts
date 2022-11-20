import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;
export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align:center;
    
    height: 18vh;
    width: 18vw;

    background-color: #ffff;
    border: solid 1px #DFE0EB;
    border-radius: 8px;
    transition: all ease 0.5s;
    :hover{
        transition: all ease 0.5s;
        border: solid 1px #3751FF;
        color: #3751FF;
        transform: scale(1.02);
        cursor: pointer;
        .CardTitle{
            transition: all ease 0.5s;
            color: #3751FF;
        }
    }
`;
export const CardTitle = styled.p`
    font-weight: 500;
    font-size: 19px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #9FA2B4;
`;
export const CardInformation = styled.h3`
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 1px;
`;
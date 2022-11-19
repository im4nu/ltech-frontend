import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;
    width: 85vw;
    padding: 10px 5vw;
    align-items:center;
    text-align:center;
`;

export const TitleOfPage = styled.div`
    align-items:center;
    justify-content: flex-start;
    text-align:center;
`;
export const Title = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #404040;
`;

export const InformationsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 15vw;
    justify-content: space-between;
    align-items:center;
    text-align: center;
`;

export const SearchArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    text-align: center;
    gap: 10px;
`;
export const SearchAreaButton = styled.button`
    border: none;
    border-radius: 2px;
    padding: 5px;
    align-items: center;
    justify-content:center;
    transition: all ease 0.6s;
        :hover{
        cursor: pointer;
        transition: all ease 0.6s;
        transform: translateY(-3px);
        background-color: #40404091;
        }
`;

export const ProfileArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    text-align: center;
    gap: 15px;
`;
export const ProfileName = styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #404040;
`;
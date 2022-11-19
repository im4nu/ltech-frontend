import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;
    width: 85vw;
    padding: 20px 30px;
    align-items:center;
    text-align:center;
`;

export const TitleOfPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
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
    justify-content: space-between;
    align-items:center;
    text-align: center;
`;

export const NotificationArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    text-align: center;
    gap: 10px;
    margin-inline-end: 1vw;
`;
export const NotificationAreaButton = styled.button`
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
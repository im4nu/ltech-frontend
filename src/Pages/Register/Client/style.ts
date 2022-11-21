import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 10px 5vw;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
`;
export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 5vh 5vw;
`;
export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;
export const ProfileImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
`;
export const ChangeImage = styled.a`
    transition: all ease 0.5s;
        :hover{
            transition: all ease 0.5s;
            transform: scale(1.02);
            cursor: pointer;
            color: rgba(64, 64, 64, 0.8)
        }
`;


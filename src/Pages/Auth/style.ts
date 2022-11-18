import styled from 'styled-components'
import BackgroundImage from '../../Assets/Images/LoginBacgkround.png'

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
    background-color: #f2f2f2;
`;
export const ImageBackground = styled.aside`
    width: 50vw;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0px 8px 8px 0px;
`;
export const FormContainer = styled.div`
    flex-direction: column;
    padding: 15vh 15vw;
    justify-content:center;
    align-items:center;
    text-align:center;
`;
export const FormContainerTitle = styled.h1`
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #404040;
`;
export const AccessButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 5vh 0vh;
`;
export const LoginButton = styled.button`
    background: #404040;
    border-radius: 8px;
    padding: 18px 10vw;
    border: none;
    color: #f2f2f2;
    font-size: 18px;
    transition: all ease 0.6s;
    :hover{
        cursor: pointer;
        transition: all ease 0.6s;
        background: #40404099;
        transform: translateY(-3px);
    }
`;
export const RgisterLink = styled.a`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-decoration-line: underline;
    color: #404040;
    transition: all ease 0.6s;
    :hover{
        cursor: pointer;
        transition: all ease 0.6s;
        color: #40404099;
    }
`;

export const SocialButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0vh;
`;
export const SocialButton = styled.button`
    padding: 10px 40px;
    border: none;
    border-radius: 8px;
    transition: all ease 0.6s;
    :hover{
        cursor: pointer;
        transition: all ease 0.6s;
        transform: translateY(-3px);
    }
`;

export const FormLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10vh 0px;
    gap: 5vh;
`;

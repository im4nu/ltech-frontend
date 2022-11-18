import React from 'react'
import FormLogin from './Components/Form'
import SocialButtons from './Components/SocialButtons'
import {
    AccessButtonsContainer,
    Container,
    FormContainer,
    FormContainerTitle,
    ImageBackground,
    LoginButton,
    RgisterLink
} from './style'

export default function LoginAuth(){
    return(
        <Container>
            <ImageBackground />
            <FormContainer>
                <FormContainerTitle>Login</FormContainerTitle>
                <FormLogin />
                <SocialButtons />
                <AccessButtonsContainer>
                    <LoginButton>Entrar</LoginButton>
                    <RgisterLink>Ainda não possui registro?</RgisterLink>
                </AccessButtonsContainer>
            </FormContainer>
        </Container>
    )
}
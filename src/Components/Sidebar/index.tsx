import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import HomeIcon from '../../Assets/Icons/Home.svg';
import EmployessIcon from '../../Assets/Icons/Employess.svg';
import TelemarketingIcon from '../../Assets/Icons/Telemarketing.svg';
import RegisterIcon from '../../Assets/Icons/Register.svg';
import UserIcon from '../../Assets/Icons/User.svg';
import ExitIcon from '../../Assets/Icons/Exit.svg'
// Style
import {
    ChildrenButton,
    Container, 
    ContainerLogo,
    Logoff,
    NavigationButton,
    NavigationContainer,
    Header
    } from './styles'

export default function Sidebar(){
    const [childrenButton, setChildrenButton] = useState(false);
    const toggleOpenChildrenButton = () => {
        setChildrenButton((current) => !current);
    };
    return(
        <Container>
            <Header>
            <ContainerLogo>
                Ltech Soluções
            </ContainerLogo>

            <NavigationContainer>
                <Link style={{textDecoration: 'none'}} to={'/'}>
                <NavigationButton>
                <img src={HomeIcon} alt="Botão de Início" />
                <p>Início</p>
                </NavigationButton>
                </Link>

                <Link style={{textDecoration: 'none'}} to={'/employess'}>
                <NavigationButton>
                <img src={EmployessIcon} alt="Botão de Funcionários" />
                <p>Funcionários</p>
                </NavigationButton>
                </Link>

                <Link style={{textDecoration: 'none'}} to={'/telemarketing'}>
                <NavigationButton>
                <img src={TelemarketingIcon} alt="Botão de Atendimento" />
                <p>Atendimento</p>
                </NavigationButton>
                </Link>

                <NavigationButton onClick={toggleOpenChildrenButton}>
                <img src={RegisterIcon} alt="Botão de Cadstro" />
                <p>Cadastro</p>
                </NavigationButton>
                {childrenButton === true &&(
                    <>
                    <Link style={{textDecoration: 'none'}} to={'/register/employess'}>
                    <ChildrenButton>
                        <img src={EmployessIcon} alt="Botão de Cadstrar funcionário" />
                        <p>Funcionário</p>
                    </ChildrenButton>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/register/client'}>
                    <ChildrenButton>
                        <img src={UserIcon} alt="Botão de Cadstrar Cliente" />
                        <p>Cliente</p>
                    </ChildrenButton>
                    </Link>
                    </>
                )}
                {childrenButton === false &&(
                    <></> 
               )}
            </NavigationContainer>
            </Header>
            <Link to={'/login'}>
            <Logoff>
                <img src={ExitIcon} alt="Botão de sair" />
            </Logoff>
            </Link>
        </Container>
    )
}
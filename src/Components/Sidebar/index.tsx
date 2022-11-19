import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '../../Assets/Icons/Close.svg';
import HomeIcon from '../../Assets/Icons/Home.svg';
import EmployessIcon from '../../Assets/Icons/Employess.svg';
import TelemarketingIcon from '../../Assets/Icons/Telemarketing.svg';
import RegisterIcon from '../../Assets/Icons/Register.svg';
import UserIcon from '../../Assets/Icons/User.svg';

import {
    ChildrenButton,
    Container, 
    ContainerLogo,
    NavigationButton,
    NavigationContainer,
    OpenCloseSidebar,
    } from './styles'

export default function Sidebar(){
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState(false);
    const [childrenButton, setChildrenButton] = useState(false);
    const toggleOpenMenu = () => {
        setMenu((current) => !current);
    };
    const toggleActive = () => {
        setActive((current) => !current);
    };
    const toggleOpenChildrenButton = () => {
        setChildrenButton((current) => !current);
    };
    return(
        <Container>
            <OpenCloseSidebar onClick={toggleOpenMenu}>
                <img src={CloseIcon} alt="Botão de fechar" />
            </OpenCloseSidebar>

            <ContainerLogo>
                Ltech Soluções
            </ContainerLogo>

            <NavigationContainer>
                <Link to={'/'}>
                <NavigationButton onClick={toggleActive}>
                <img src={HomeIcon} alt="Botão de Início" />
                <p>Início</p>
                </NavigationButton>
                </Link>

                <Link to={'/employess'}>
                <NavigationButton onClick={toggleActive}>
                <img src={EmployessIcon} alt="Botão de Funcionários" />
                <p>Funcionários</p>
                </NavigationButton>
                </Link>

                <Link to={'/telemarketing'}>
                <NavigationButton onClick={toggleActive}>
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
                    <Link to={'/register/employess'}>
                    <ChildrenButton>
                        <img src={EmployessIcon} alt="Botão de Cadstrar funcionário" />
                        <p>Funcionário</p>
                    </ChildrenButton>
                    </Link>
                    <Link to={'/register/client'}>
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
        </Container>
    )
}
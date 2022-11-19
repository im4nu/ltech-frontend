import React, { useState } from 'react';
import CloseIcon from '../../Assets/Icons/Close.svg';
import HomeIcon from '../../Assets/Icons/Home.svg';
import EmployessIcon from '../../Assets/Icons/Employess.svg';
import TelemarketingIcon from '../../Assets/Icons/Telemarketing.svg';
import RegisterIcon from '../../Assets/Icons/Register.svg';
import ChildrenIcon from '../../Assets/Icons/Children.svg';
import UserIcon from '../../Assets/Icons/User.svg';
import MenuIcon from '../../Assets/Icons/Menu.svg';

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
    const activeColor = '#62B5F1';
    const inactiveColor = '#C0C0C0';
    return(
        <Container>
            <OpenCloseSidebar onClick={toggleOpenMenu}>
                <img src={CloseIcon} alt="Botão de fechar" />
            </OpenCloseSidebar>

            <ContainerLogo>
                Ltech Soluções
            </ContainerLogo>

            <NavigationContainer>
                <NavigationButton onClick={toggleActive}>
                <img src={HomeIcon} alt="Botão de Início" />
                <p>Início</p>
                </NavigationButton>

                <NavigationButton onClick={toggleActive}>
                <img src={EmployessIcon} alt="Botão de Funcionários" />
                <p>Funcionários</p>
                </NavigationButton>

                <NavigationButton onClick={toggleActive}>
                <img src={TelemarketingIcon} alt="Botão de Atendimento" />
                <p>Atendimento</p>
                </NavigationButton>

                <NavigationButton onClick={toggleOpenChildrenButton}>
                <img src={RegisterIcon} alt="Botão de Cadstro" />
                <p>Cadastro</p>
                </NavigationButton>
                {childrenButton === true &&(
                    <>
                    <ChildrenButton>
                        <img src={ChildrenIcon} alt="Botão de Cadstrar funcionário" />
                        <p>Funcionário</p>
                    </ChildrenButton>

                    <ChildrenButton>
                        <img src={UserIcon} alt="Botão de Cadstrar Cliente" />
                        <p>Cliente</p>
                    </ChildrenButton>
                    </>
                )}
                {childrenButton === false &&(
                    <></> 
               )}
            </NavigationContainer>
        </Container>
    )
}
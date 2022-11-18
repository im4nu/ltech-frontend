import CloseIcon from '../../Assets/Icons/Close.svg';
import {
    Container, 
    ContainerLogo,
    NavigationButton,
    NavigationButtonContainer, 
    NavigationButtonText, 
    NavigationContainer,
    OpenCloseSidebar,
    } from './styles'

export default function Sidebar(){
    return(
        <Container>
            <OpenCloseSidebar>
                {/* <img src={OpenIcon} alt="Botão de abrir" /> */}
                <img src={CloseIcon} alt="Botão de fechar" />
            </OpenCloseSidebar>

            <ContainerLogo>
                Ltech Soluções
            </ContainerLogo>

            <NavigationContainer>
                <NavigationButtonContainer>
                    <NavigationButton>
                        <NavigationButtonText></NavigationButtonText>
                    </NavigationButton>
                </NavigationButtonContainer>
            </NavigationContainer>
        </Container>
    )
}
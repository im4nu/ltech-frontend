import NotificatioIcon from '../../Assets/Icons/Notification.svg'
import DivisorIcons from '../../Assets/Icons/Divisor.svg'
import {
    Container, 
    InformationsContainer, 
    ProfileArea, 
    ProfileName, 
    NotificationArea, 
    NotificationAreaButton, 
    Title, 
    TitleOfPage} 
    from './styles'
import SearchBarComponent from '../SearchBar';

interface TitlePageProps{
    title: string;
}

export default function HeaderNavigation({title}: TitlePageProps){
    return(
        <Container>
            <TitleOfPage>
                <Title>{title}</Title>
            </TitleOfPage>

            <SearchBarComponent />

            <InformationsContainer>
                <NotificationArea>
                    <NotificationAreaButton>
                        <img 
                        src={NotificatioIcon}
                        alt="icone de notificação"
                        style={{
                            width: 18,
                            height: 18,
                        }}
                         />
                    </NotificationAreaButton>

                    <img src={DivisorIcons} alt="divisor" />
                </NotificationArea>
                <ProfileArea>
                    <ProfileName>
                        Neymar
                    </ProfileName>

                    <img 
                    src="https://github.com/im4nu.png" 
                    alt="imagem de perfil" 
                    style={{
                        borderRadius: 40,
                        height: 60,
                        width: 60,
                    }}
                    />
                </ProfileArea>
            </InformationsContainer>
        </Container>
    )
}
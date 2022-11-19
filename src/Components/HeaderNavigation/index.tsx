import SearchIcon from '../../Assets/Icons/SearchGray.svg'
import NotificatioIcon from '../../Assets/Icons/Notification.svg'
import DivisorIcons from '../../Assets/Icons/Divisor.svg'
import {
    Container, 
    InformationsContainer, 
    ProfileArea, 
    ProfileName, 
    SearchArea, 
    SearchAreaButton, 
    Title, 
    TitleOfPage} 
    from './styles'

interface TitlePageProps{
    title: string;
}

export default function HeaderNavigation({title}: TitlePageProps){
    return(
        <Container>
            <TitleOfPage>
                <Title>{title}</Title>
            </TitleOfPage>

            <InformationsContainer>
                <SearchArea>
                    <SearchAreaButton>
                        <img 
                        src={SearchIcon}
                        alt="icone de busca"
                        style={{
                            width: 18,
                            height: 18,
                        }}
                         />
                    </SearchAreaButton>

                    <SearchAreaButton>
                        <img 
                        src={NotificatioIcon}
                        alt="icone de notificação"
                        style={{
                            width: 18,
                            height: 18,
                        }}
                         />
                    </SearchAreaButton>

                    <img src={DivisorIcons} alt="divisor" />
                </SearchArea>

                <ProfileArea>
                    <ProfileName>
                        Marco Aurélio
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
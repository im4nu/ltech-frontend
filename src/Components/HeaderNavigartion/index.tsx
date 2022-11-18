import {
    Container, 
    InformationsContainer, 
    ProfileArea, 
    ProfileImage, 
    ProfileName, 
    SearchArea, 
    SearchAreaButtons, 
    Title, 
    TitleOfPage} 
    from './styles'

interface TitlePageProps{
    title: string;
}

export default function Sidebar(title: TitlePageProps){
    return(
        <Container>
            <TitleOfPage>
                <Title></Title>
            </TitleOfPage>

            <InformationsContainer>
                <SearchArea>
                    <SearchAreaButtons>

                    </SearchAreaButtons>
                </SearchArea>

                <ProfileArea>
                    <ProfileName>

                    </ProfileName>

                    <ProfileImage>

                    </ProfileImage>
                </ProfileArea>
            </InformationsContainer>
        </Container>
    )
}
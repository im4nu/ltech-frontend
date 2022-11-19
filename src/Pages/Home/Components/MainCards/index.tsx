import {
    CardContainer,
    CardInformation,
    CardTitle,
    MainCard
} from './style'

export default function MainCards(){
    return(<>
        <CardContainer>
            <MainCard>
                <CardTitle  className="CardTitle">
                    Pendentes
                </CardTitle>

                <CardInformation>
                    60
                </CardInformation>
            </MainCard>

            <MainCard>
                <CardTitle className="CardTitle">
                    Conluiídos
                </CardTitle>

                <CardInformation>
                    20
                </CardInformation>
            </MainCard>

            <MainCard>
                <CardTitle className="CardTitle">
                    Abertos
                </CardTitle>

                <CardInformation>
                    43
                </CardInformation>
            </MainCard>

            <MainCard>
                <CardTitle className="CardTitle">
                    Em aguardo
                </CardTitle>

                <CardInformation>
                    3
                </CardInformation>
            </MainCard>
        </CardContainer>
    </>
    )
}
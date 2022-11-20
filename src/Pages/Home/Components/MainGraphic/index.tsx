import LineBlueIcon from '../../../../Assets/Icons/LineBlue.svg'
import LineGrayIcon from '../../../../Assets/Icons/LineGray.svg'
import {
    CardNumber,
    CardTitle,
    Graphic,
    GraphicContainer,
    HeaderGraphic,
    HeaderParagraph,
    HeaderSub,
    HeaderSubContainer,
    HeaderSubText,
    HeaderTitle,
    HeaderTitleText,
    InformationsCard,
    InformationsContainer,
    MainGraphic,
} from './style'

export default function GraphicComponent(){
    return(
    <GraphicContainer>
        <Graphic>
            <HeaderGraphic>
                <HeaderTitle>
                    <HeaderTitleText>Estatísticas Diarias</HeaderTitleText>
                    <HeaderParagraph>Ultima atualização as 18:00</HeaderParagraph>
                </HeaderTitle>
                <HeaderSubContainer>
                    <HeaderSub>
                        <img src={LineBlueIcon} alt="Legenda Azul" />
                        <HeaderSubText>Hoje</HeaderSubText>
                    </HeaderSub>
                    <HeaderSub>
                        <img src={LineGrayIcon} alt="Legenda Cinza" />
                        <HeaderSubText>Ontem</HeaderSubText>
                    </HeaderSub>
                </HeaderSubContainer>
            </HeaderGraphic>

            <MainGraphic />
        </Graphic>

        <InformationsContainer>
                <InformationsCard style={{border: 'none'}}>
                    <CardTitle>Atendimentos</CardTitle>
                    <CardNumber>5</CardNumber>
                </InformationsCard>
                <InformationsCard>
                    <CardTitle>Em Aberto</CardTitle>
                    <CardNumber>3</CardNumber>
                </InformationsCard>
                <InformationsCard>
                    <CardTitle>Resolvidos</CardTitle>
                    <CardNumber>2</CardNumber>
                </InformationsCard>
                <InformationsCard>
                    <CardTitle>Pendentes</CardTitle>
                    <CardNumber>0</CardNumber>
                </InformationsCard>
                <InformationsCard>
                    <CardTitle>Tempo Médio</CardTitle>
                    <CardNumber>45 min</CardNumber>
                </InformationsCard>
        </InformationsContainer>
    </GraphicContainer>
    )
}
import styled from "styled-components";
import GraphicImage from '../../../../Assets/Images/MainGraphic.png'

export const GraphicContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border: solid 1px #DFE0EB;
    border-radius: 8px;
    margin-top: 3vh;
`;
export const Graphic = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2vh 2vw;
`;

export const HeaderGraphic = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30vw;
`;
export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const HeaderTitleText = styled.h2`
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    width: 30vw;
    color: #252733;
`;
export const HeaderParagraph = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #9FA2B4;
`;
export const HeaderSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;
export const HeaderSub = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    gap: 5px;
`;
export const HeaderSubText =styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.1px;
    color: #9FA2B4;
`;

export const MainGraphic = styled.image`
    width: 35vw;
    height: 27vh;
    background-image: url(${GraphicImage});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 30px 2.5vw;
`;

export const InformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    justify-content: space-evenly;
`;
export const InformationsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;

    border-top: solid 1px #DFE0EB;
    border-left: solid 1px #DFE0EB;
`;
export const CardTitle =styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #9FA2B4;
`;
export const CardNumber = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #252733;
`;
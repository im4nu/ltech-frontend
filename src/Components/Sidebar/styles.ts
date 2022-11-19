import styled from "styled-components";

// ===> OPEN STATE
export const Container = styled.div`
    height: 100vh;
    width: 15vw;
    background-color: #363740;
    padding: 15px 0px;
`;
export const OpenCloseSidebar = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 0px 20px;
`;
export const ContainerLogo = styled.div`
    justify-content: center;
    text-align: center;
    align-items:center;
    color: #f2f2f2;
    font-size: 22px;
    font-weight: 500;
    padding: 20px;
    margin-bottom: 5vh;
`; 
export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
export const NavigationButton = styled.button`
    display: flex;
    flex-direction: row;
    width: 95%;
    justify-content: flex-start;
    padding: 10px 25px;
    gap: 40px;
    align-items: center;
    text-align:center;

    background-color: #363740;
    border-left: solid 2px #9FA2B4;
    border-top: none;
    border-right: none;
    border-bottom: none;

    color: #f2f2f2;
    transition: all ease 0.5s;
        :hover{
            transition: all ease 0.5s;
            width: 90%;
            transform: scale(1.03);
            cursor: pointer;
        }
`;
export const ChildrenButton = styled.button`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: flex-end;
    padding: 10px 25px;
    gap: 40px;
    align-items: center;
    text-align:center;

    background-color: #363740;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: none;

    color: #f2f2f2;
    transition: all ease 0.5s;
        :hover{
            transition: all ease 0.5s;
            width: 90%;
            transform: scale(1.03);
            cursor: pointer;
        }
`;

// ===> CLOSE STATE
export const CloseContainer = styled.div`
    height: 100vh;
    width: 5vw;
    background-color: #363740;
    padding: 20px 0px;
    justify-content: flex-start;
    align-items: center;
`;
export const CloseOpenSidebar = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 0px 20px;
`;
export const CloseContainerLogo = styled.div`
    justify-content: center;
    text-align: center;
    align-items:center;
    color: #f2f2f2;
    font-size: 22px;
    font-weight: 500;
    padding: 3vh;
`; 
export const CloseNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
export const CloseNavigationButton = styled.button`
    display: flex;
    flex-direction: row;
    width: 95%;
    justify-content: flex-start;
    padding: 10px 25px;
    gap: 40px;
    align-items: center;
    text-align:center;

    background-color: #363740;
    border-left: solid 2px #9FA2B4;
    border-top: none;
    border-right: none;
    border-bottom: none;

    color: #f2f2f2;
    transition: all ease 0.5s;
        :hover{
            transition: all ease 0.5s;
            width: 90%;
            transform: scale(1.03);
            cursor: pointer;
        }
`;
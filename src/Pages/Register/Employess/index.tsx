import HeaderNavigation from "../../../Components/HeaderNavigation"
import Sidebar from "../../../Components/Sidebar"
import ButtonComponent from "./Components/Button"
import FormComponent from "./Components/Form"
import UserIcon from '../../../Assets/Icons/EmployessUser.svg'
import {
     Container,
    ChangeImage,
    FormContainer,
    InputArea,
    ProfileContainer,
    ProfileImage
    } from "./style"

export default function EmployessRegister(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Cadastro de Funcionário" />
                <Container>
                    <FormContainer>
                        <InputArea>
                            <FormComponent />
                            <ButtonComponent title="Limpar Formulário" />
                        </InputArea>
                        <ProfileContainer>
                            <ProfileImage>
                                <img                    
                                 src={UserIcon} 
                                alt="imagem de perfil" 
                                style={{
                                    borderRadius: 40,
                                    height: 220,
                                    width: 220,
                                }} />
                            </ProfileImage>
                            
                            <ChangeImage>Inserir imagem de perfil</ChangeImage>
                            
                            <ButtonComponent title="Salvar Cadastro" />
                        </ProfileContainer>
                    </FormContainer>
                </Container>
            </div>
        </div>
    )
}
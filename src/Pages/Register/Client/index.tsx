import HeaderNavigation from "../../../Components/HeaderNavigation"
import Sidebar from "../../../Components/Sidebar"
import { Container } from "./style"

export default function ClientRegister(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Cadastro de Cliente" />
                <Container>
                    <h1 style={{fontWeight: 500}}>Wellcome to Client Register</h1>
                </Container>
            </div>
        </div>
    )
}
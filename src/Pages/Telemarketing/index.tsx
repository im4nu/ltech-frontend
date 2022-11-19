import HeaderNavigation from "../../Components/HeaderNavigation"
import Sidebar from "../../Components/Sidebar"
import { Container } from "./style"

export default function Telemarketing(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Atendimento" />
                <Container>
                    <h1 style={{fontWeight: 500}}>Wellcome to home Telemarketing's Screen</h1>
                </Container>
            </div>
        </div>
    )
}
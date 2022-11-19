import HeaderNavigation from "../../../Components/HeaderNavigation"
import Sidebar from "../../../Components/Sidebar"
import { Container } from "./style"

export default function EmployessRegister(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Home Dashboard" />
                <Container>
                    <h1 style={{fontWeight: 500}}>Wellcome to home Wellcome to Employess Register</h1>
                </Container>
            </div>
        </div>
    )
}
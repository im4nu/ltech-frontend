import HeaderNavigation from "../../Components/HeaderNavigation"
import Sidebar from "../../Components/Sidebar"
import MainCards from "./Components/MainCards"
import { 
    Container,
 } from "./style"

export default function Dashboard(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Dashboard" />
                <Container>
                    <MainCards />
                </Container>
            </div>
        </div>
    )
}
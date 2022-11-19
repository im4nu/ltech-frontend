import HeaderNavigation from "../../Components/HeaderNavigation"
import Sidebar from "../../Components/Sidebar"

export default function Dashboard(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Home" />
                <div>
                    <h1>Wellcome to home dashboard</h1>
                </div>
            </div>
        </div>
    )
}
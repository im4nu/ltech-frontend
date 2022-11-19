import {Container} from './style'
import HeaderNavigation from '../../Components/HeaderNavigation'
import Sidebar from '../../Components/Sidebar'

export default function Employess(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Funionários" />
                <Container>
                    <h1 style={{fontWeight: 500}}>Wellcome to Employess's Screen</h1>
                </Container>
            </div>
        </div>
    )
}


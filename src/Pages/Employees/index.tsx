import {TudoQueTiverDentroDaPagina} from './style'
import HeaderNavigation from '../../Components/HeaderNavigation'
import Sidebar from '../../Components/Sidebar'

export default function Employess(){
    return(
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Sidebar />
        
        <div style={{display: "flex", flexDirection: "column"}}>
            <TudoQueTiverDentroDaPagina>
                <HeaderNavigation title='Fuincionários'/>
            </TudoQueTiverDentroDaPagina>
        </div>
    </div>
    )
}


import {TudoQueTiverDentroDaPagina} from './style'
import SearchBarComponent from '../../Components/SearchBar'
import HeaderNavigation from '../../Components/HeaderNavigation'

export default function Employess(){
    return(
        <TudoQueTiverDentroDaPagina>
            <HeaderNavigation title='Fuincionários'/>
            <SearchBarComponent />            
        </TudoQueTiverDentroDaPagina>
    )
}
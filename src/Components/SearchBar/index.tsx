
import {ButtonSearch, Divinput, Input, SearchBar, Titlefun} from './style'
import ImgSearch from '../../Assets/Images/ImgSearch.svg'

export default function SearchBarComponent(){
    return(
        <SearchBar>
       <Titlefun><h3>Funcionários</h3></Titlefun>
        <Divinput>
            <ButtonSearch  src={ImgSearch} alt="" width="20rem" />
           <Input></Input>
           
        </Divinput>
         
        </SearchBar>
    )
}
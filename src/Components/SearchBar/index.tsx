
import {ButtonSearch, Divinput, Input} from './style'
import ImgSearch from '../../Assets/Images/ImgSearch.svg'

export default function SearchBarComponent(){
    return(
    
       
        <Divinput>
            <ButtonSearch  src={ImgSearch} alt="" width="20rem" />
           <Input></Input>
        </Divinput>
    
    )
}
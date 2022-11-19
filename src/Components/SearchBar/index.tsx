import {useState} from 'react'
import {
    SearchBar
} from './style'
import SearchIcon from '../../Assets/Icons/Search.svg'
import { TextField } from '@material-ui/core';

export default function SearchBarComponent(){
    const [inputSearch, setInputSearch] = useState('')
    const toggleSearch = () => {
        setInputSearch((text) => text);
    };

    return(
<<<<<<< HEAD
    
       
        <Divinput>
            <ButtonSearch  src={ImgSearch} alt="" width="20rem" />
           <Input></Input>
        </Divinput>
    
=======
        <SearchBar>
            <TextField
            id="filled-basic"
            label="Buscar"
            variant="standard"
            onChange={toggleSearch}
            style={{
                width: '25vw',
                padding: 5,
                borderRadius: 10,
            }}
            />
            <img style={{width: 24, height: 24}} src={SearchIcon} alt="Ícone de busca" />
        </SearchBar>
>>>>>>> f2fbef0964150e7b4193165b373187bab45f0e18
    )
}
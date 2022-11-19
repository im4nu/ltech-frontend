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
    console.log(inputSearch)
    return(
        <SearchBar>
            <TextField
            id="filled-basic"
            label="Buscar"
            variant="standard"
            style={{
                width: '25vw',
                backgroundColor: "#F0F2F5",
                padding: 5
            }}
            />
            <img style={{width: 24, height: 24}} src={SearchIcon} alt="Ícone de busca" />
        </SearchBar>
    )
}
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
    )
}
import { InputContainer } from "./style"
import { TextField } from '@material-ui/core';
import {useState} from 'react'

export default function FormComponent(){
    const [fullName, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [genre, setGenre] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const toggleFullName = () => {
        setFullName((text) => text);
    };
    const toggleCpf = () => {
        setCpf((text) => text);
    };
    const toggleBirthDate = () => {
        setBirthDate((text) => text);
    };
    const toggleGenre = () => {
        setGenre((text) => text);
    };
    const togglePhone = () => {
        setPhone((text) => text);
    };
    const toggleMail = () => {
        setMail((text) => text);
    };
    return(
        <>
            <InputContainer>
            <TextField
            id="filled-basic"
            label="Nome Completo:"
            variant="standard"
            onChange={toggleFullName}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="CPF:"
            variant="standard"
            onChange={toggleCpf}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="Data de Nascimento"
            variant="standard"
            onChange={toggleBirthDate}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="Gênero"
            variant="standard"
            onChange={toggleGenre}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="Telefone"
            variant="standard"
            onChange={togglePhone}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="Email"
            variant="standard"
            onChange={toggleMail}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            </InputContainer>
        </>
        )
}
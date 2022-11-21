import { InputContainer, InputGrid } from "./style"
import { TextField } from '@material-ui/core';
import {useState} from 'react'

export default function FormComponent(){
    const [fullName, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [genre, setGenre] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const [adrees, setAdress] = useState('');
    const [cep, setCep] = useState('')
    const [adressNumber, setAdressNumber] = useState('')
    const [adicionalInformation, setAdicionalInformation] = useState('')

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

    const toggleAdress = () => {
        setAdress((text) => text);
    };
    const toggleCep = () => {
        setCep((text) => text);
    };
    const toggleAdressNumber = () => {
        setAdressNumber((text) => text);
    };
    const toggleAdicionalInformation = () => {
        setAdicionalInformation((text) => text);
    };
    return(
        <>
            <InputContainer>
            <TextField
            id="filled-basic"
            label="Nome Fantasia"
            variant="standard"
            onChange={toggleFullName}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            <InputGrid>
            <TextField
            id="filled-basic"
            label="CNPJ"
            variant="standard"
            onChange={toggleCpf}
            style={{
                width: '12vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="Data de Nascimento"
            variant="standard"
            onChange={toggleBirthDate}
            style={{
                width: '12vw',
                borderRadius: 10,
            }}
            />
            </InputGrid>
            <InputGrid>
            <TextField
            id="filled-basic"
            label="Gênero"
            variant="standard"
            onChange={toggleGenre}
            style={{
                width: '12vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="Telefone"
            variant="standard"
            onChange={togglePhone}
            style={{
                width: '12vw',
                borderRadius: 10,
            }}
            />
            </InputGrid>
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
            <TextField
            id="filled-basic"
            label="Logradouro"
            variant="standard"
            onChange={toggleAdress}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            <InputGrid>
            <TextField
            id="filled-basic"
            label="Número da residência"
            variant="standard"
            onChange={toggleAdressNumber}
            style={{
                width: '12vw',
                borderRadius: 10,
            }}
            />
            <TextField
            id="filled-basic"
            label="CEP"
            variant="standard"
            onChange={toggleCep}
            style={{
                width: '12vw',
                borderRadius: 10,
            }}
            />
            </InputGrid>
            <TextField
            id="filled-basic"
            label="Complemento"
            variant="standard"
            onChange={toggleAdicionalInformation}
            style={{
                width: '25vw',
                borderRadius: 10,
            }}
            />
            </InputContainer>
        </>
        )
}
import React from 'react'
import { FormLoginContainer } from '../../style';
import TextField from '@material-ui/core/TextField';

export default function FormLogin(){
    return(
        <FormLoginContainer>
          <TextField
          label="Email"
          fullWidth
          type='email'
          />
          <TextField
          label="Senha"
          fullWidth
          type='password'
          />
        </FormLoginContainer>
    )
}
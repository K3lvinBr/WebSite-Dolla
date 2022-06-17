import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Error,
    FormButton,
    Text
} from './SigninElements'

const SignIn = ({ setUser }) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        message: '',
        display: false
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/signin', form).then(res => {
            if (res.data.name) {
                setUser(res.data.name)
                navigate(`/${res.data.name}`)
            }
            else setError(res.data)
        })
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>dolla</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Faça login em sua conta</FormH1>
                            <FormLabel htmlFor='for'>E-mail</FormLabel>
                            <FormInput type='email' onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                            <FormLabel htmlFor='for'>Senha</FormLabel>
                            <FormInput type='password' onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                            <Error error={error.display}>{error.message}</Error>
                            <FormButton type='submit' onClick={handleSubmit}>Continuar</FormButton>
                            <Text>Esqueceu a senha</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
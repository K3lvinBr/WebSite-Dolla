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
    FormButton
} from './SignupElements'

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const [error, setError] = useState({
        message: '',
        display: false
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/signup', form).then(res => {
            setError(res.data)
            if (res.data.success) setTimeout(() => {
                navigate('/signin')
            }, 1000)
        })
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>dolla</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Criar nova conta</FormH1>
                            <FormLabel htmlFor='for'>Nome</FormLabel>
                            <FormInput type='text' onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                            <FormLabel htmlFor='for'>E-mail</FormLabel>
                            <FormInput type='email' onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                            <FormLabel htmlFor='for'>Senha</FormLabel>
                            <FormInput type='password' onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                            <FormLabel htmlFor='for'>Confirmar senha</FormLabel>
                            <FormInput type='password' onChange={(e) => setForm({ ...form, confirm: e.target.value })} required />
                            <Error error={error.display} success={error.success}>{error.message}</Error>
                            <FormButton type='submit' onClick={handleSubmit}>Continuar</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Container, Content, FormContainer, InputContainer, Background, Error } from './styles'
import api from '../../services/api'

interface FormData {
    name: string;
    email: string;
    password: string;
}

export function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    const onSubmit = handleSubmit(data => api.post('/user/new', data).then(() => history.push('/')));

    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiUser size={40} />
                            <input type="text" placeholder="Nome" {...register("name", { required: true })}/>
                        </InputContainer>
                        {errors.name && <Error>O preenchimento do campo é obrigatório</Error>}
                       
                        <InputContainer>
                            <FiMail size={40} />
                            <input type="email" placeholder="E-mail" {...register("email", { required: true })}/>
                        </InputContainer>
                        {errors.email && <Error>O preenchimento do campo é obrigatório</Error>}
                       
                        <InputContainer>
                            <FiLock size={40} />
                            <input type="password" placeholder="Senha" {...register("password", { required: true })}/>
                        </InputContainer>
                        {errors.password && <Error>O preenchimento do campo é obrigatório</Error>}
                       
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40} />
                        Voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}
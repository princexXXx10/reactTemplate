import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fbf7f7;
    border-radius: .3rem;


    ${mobile({ width: "80%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    flex-direction: column;
    display: flex;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 15px;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0px 2px #888888;

    &:focus{
        outline: none;
    }
`

const Button = styled.button`
    min-width: 40%;
    border: none;
    padding: 12px 18px;
    background-color: #00dca9;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: .3rem;
`

const Link = styled.a`
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
    font-size: 14px;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Email address" />
                <Input placeholder="Password" />
                <Button>Sign in</Button>
                <Link>Forgot password?</Link>
                <Link> Create new account </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
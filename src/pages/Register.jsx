import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fbf7f7;;


    ${mobile({ width: "80%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    flex-wrap: wrap;
    display: flex;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 15px;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0px 2px #888888;

    &:focus{
        outline: none;
    }
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    min-width: 90%;
    margin-left: 4%;
    border: none;
    border-radius: .3rem;
    font-size: 20px;
    padding: 15px 20px;
    background-color: #00dca9;
    color: white;
    cursor: pointer;
`

const Link = styled.a`
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
    font-size: 14px;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, I concent to the processing of my personal
                    data in accordance with the <Link><b> PRIVACY POLICY </b></Link>
                </Agreement>
                <Button>Create account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
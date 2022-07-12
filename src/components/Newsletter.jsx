import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 40vh;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    ${mobile({ height: "25vh" })}
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;


    ${mobile({ fontSize: "40px" })}
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;


    ${mobile({ textAlign: "center", fontSize: "20px" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 2px solid lightgray;


    ${mobile({ height: "30px", width: "70%" })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #0ec0b4;
    color: white;
    cursor: pointer;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products</Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
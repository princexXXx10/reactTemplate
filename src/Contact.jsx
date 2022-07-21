import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background: url("g");
    height: 90%;
`
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FormContainer = styled.div`
    width: 50%;
`
const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
`

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
`
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
`
const TextArea = styled.textarea`
    width: 200px;
    height: 60%;

`
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
`

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`

const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
`


const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>Questions? <br/>  Lets Get in Touch</Title>
                <Form>
                    <LeftForm>
                        <Input placeholder="Name: "/>
                        <Input placeholder="Email: "/>
                        <Input placeholder="Subject: "/>
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder="Message" />
                        <Button>Send</Button>
                    </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Text>123 Part Avenue St., New York, USA</Text>
                </AddressItem>
                <AddressItem>
                    <Text>123 Part Avenue St., New York, USA</Text>
                </AddressItem>
                <AddressItem>
                    <Text>123 Part Avenue St., New York, USA</Text>
                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact
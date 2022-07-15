import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 50px );
    display: flex;
    padding: 25vh 20px;
`

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    width: 60%;
    font-size: 60px;
`
const Description = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`

const Info = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`
const Button = styled.button`
    border: none;
    padding: 15px 25px;
    font-size: 15px;
    background-color: crimson;
    color: white;
    border-radius: 5px;
    letter-spacing: 0px;
    cursor: pointer;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`
const Phone = styled.span`
    color: pink;
`
const ContactText = styled.span`
    color: grey;
`

const Right = styled.div`
    width: 40%;
`

const Intro = () => {
  return (
    <Container>
        <Left><Title>Welcome to Krypto networking hub</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique asperiores in impedit voluptas optio dolor quo fuga voluptatum, omnis dolorem, non numquam veniam. 
        Hic quae ex doloremque similique laboriosam unde?</Description>
        <Info>
            <Button>Join Us Now</Button>
            <Contact>
                <Phone>Call Us (+234) 23456789 </Phone>
                <ContactText>For any question or concerns please react us on this number below</ContactText>
            </Contact>
        </Info>
        </Left>
        <Right>r</Right>
    </Container>
  )
}


export default Intro
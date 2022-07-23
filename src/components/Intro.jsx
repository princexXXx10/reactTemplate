import React from 'react'
import styled from 'styled-components'
import Major from '../images/Major.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc(100vh - 60px );
    display: flex;
    padding: 0vh 20px;
    color: white;


    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`

const Left = styled.div`
    padding-top: 20vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;


    @media only screen and (max-width: 480px){
        width: 100%;
        height: 100%;
    }
`
const Title = styled.h1`
    width: 60%;
    font-size: 60px;


    @media only screen and (max-width: 480px){
        width: 100%;
        font-size: 50px;
    }
`


const Description = styled.p`
    width: 60%;
    font-size: 15px;
    margin-top: 20px;


    @media only screen and (max-width: 480px){
        width: 100%;
    }
`

const Info = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;


    @media only screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
    }
`
const Button = styled.button`
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    background-color: white;
    color: black;
    letter-spacing: 2px;
    cursor: pointer;


    @media only screen and (max-width: 480px){
        margin-bottom: 300px;
    }
`

const Right = styled.div`
    width: 40%;
    color: black;


    @media only screen and (max-width: 480px){
        display: none;
    }
`

const Image = styled.img`
    margin-left: 2vw;
    width: 80%;
`

const Intro = () => {
  return (
    <Container>
        <Left><Title>A trading platform you'll love</Title>
        <Description>Buy, Sell and Swap crypto assets easily and effortlessly.
        Join over 200,000 people in trading today.</Description>
        <Info>
            <Button>Get Started</Button>
        </Info>
        </Left>
        <Right><Image src={Major} /></Right>
        <AnimatedShapes />
    </Container>
  )
}


export default Intro
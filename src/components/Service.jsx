import React from 'react';
import styled from 'styled-components';
import Major from '../images/Major.jpg'
import MiniCard from './MiniCard';

const Container = styled.div`
    display: flex;
    height: 100%;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    height: 100%;
    margin-left: 100px;
`

const Right = styled.div`
    width: 50%;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    width: 60%;
`
const Description = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: black;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={Major} />
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple Process To Start</Title>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui, eligendi suscipit consequuntur illo aperiam. 
                    Quam magnam voluptatum excepturi nisi quia perspiciatis ad nemo, consectetur placeat expedita deserunt soluta quisquam!
                </Description>
                <CardContainer>
                    <MiniCard />
                    <MiniCard />
                    <MiniCard />
                </CardContainer>
                <Button>
                    <Icon src={Major}/>How Works
                </Button>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service
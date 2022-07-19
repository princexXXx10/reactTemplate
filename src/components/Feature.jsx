import React from 'react';
import styled from 'styled-components';
import Phone from '../images/Phone.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    width: 80%;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.span`
    font-size: 70px;
`
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;

`
const Description = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`
const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 20px;
    font-size: 20px;
`

const Feature = () => {
  return (
    <Container>
        <Left>
            <Image src={Phone} />
        </Left>
        <Right>
            <Title>
                <b>good</b> design
                <br/>
                <b>bad</b> business
            </Title>
            <SubTitle>We know what good business means.</SubTitle>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur perferendis libero earum velit adipisci corrupti veniam, deleniti 
                recusandae placeat id suscipit rem quos, unde excepturi est veritatis soluta ratione fuga.</Description>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature
import React, { useState } from 'react';
import styled from 'styled-components';
import Woman from '../images/Woman.png';
import MiniCard from './MiniCard';

const Container = styled.div`
    display: flex;
    height: 100%;
`

const Left = styled.div`
    width: 50%;
    position: relative;
`

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
    margin-left: 100px;
`

const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
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
    const [open, setOpen] = useState(false);
  return (
    <Container>
        <Left>
            <Image open={open} src={Woman} />
            <Video open={open} autoPlay loop controls src="https://www.youtube.com/watch?v=3j4l7DWseQU&t=67s" />
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
                <Button onClick={() => setOpen(true)}>
                    <Icon src={Woman}/>How Works
                </Button>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service
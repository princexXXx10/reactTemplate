import React, { useState } from 'react';
import styled from 'styled-components';
import Woman from '../images/Woman.png';
import MiniCard from './MiniCard';

const Container = styled.div`
    display: flex;
    height: 100%;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`

const Left = styled.div`
    width: 50%;
    position: relative;


    @media only screen and (max-width: 480px){
        display: none;
    }
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


    @media only screen and (max-width: 480px){
        width: 100%;
    }
`

const Right = styled.div`
    width: 50%;


    @media only screen and (max-width: 480px){
        width: 100%;
    }
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;


    @media only screen and (max-width: 480px){
        padding: 20px;
    }
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

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`

const CloseButton = styled.button`
    position: absolute;
    border-radius: 5px;
    background-color: white;
    padding: 5px;
    border: none;
    right: 5px;
    top: 30px;
    
`

const Service = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;
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

        {smallScreen && open && (
            <Modal>
                <Video open={open} autoPlay loop controls src="https://www.youtube.com/watch?v=3j4l7DWseQU&t=67s" />
                <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
            </Modal>
        )}
    </Container>
  )
}

export default Service
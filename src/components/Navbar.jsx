import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: black;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
    text-decoration: underline crimson;
    list-style: none;
    font-weight: 900;
    font-size: 25px;
`

const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 480px){
      display: none;
    }

    @media only screen and (max-width: 780px){
      display: none;
    }
`

const MenuItem = styled.li`
    margin-right: 40px;
    cursor: pointer;

    &hover {
      background-color: crimson;
    }
`

const Button = styled.div`
    display: flex;
    justify-content: space-between;
`

const Login = styled.button`
    padding: 7px 25px;
    font-size: 15px;
    background-color: white;
    border: none;
    border-radius: 2px;
    color: black;
    cursor: pointer;
    margin-right: 50px;
`

const SignUp = styled.button`
    padding: 10px 30px;
    font-size: 14px;
    background-color: black;
    border: 1px solid white;
    text-transform: capitalize;
    color: white;
    cursor: pointer;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left><Logo>Krypto</Logo>
          <Menu>
              <MenuItem>Buy Crypto</MenuItem>
              <MenuItem>Market</MenuItem>
              <MenuItem>Trade</MenuItem>
              <MenuItem>Earn</MenuItem>
              <MenuItem>More</MenuItem>
            </Menu>
          </Left>
          <Button>
            <Login>
              Log In
            </Login>
            <SignUp>
              Sign Up
            </SignUp>
          </Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar
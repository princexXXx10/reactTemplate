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
`

const MenuItem = styled.li`
    margin-right: 40px;
    cursor: pointer;

    &hover {
      background-color: crimson;
    }
`

const Button = styled.button`
    padding: 7px 25px;
    font-size: 15px;
    background-color: crimson;
    border: none;
    text-transform: capitalize;
    border-radius: 3px;
    color: white;
    cursor: pointer;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left><Logo>Logo</Logo>
          <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>Feature</MenuItem>
              <MenuItem>Services</MenuItem>
              <MenuItem>Pricing</MenuItem>
              <MenuItem>Contact</MenuItem>
            </Menu>
          </Left>
          <Button>
            Button
          </Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;


    ${mobile({ height: "60px" })}
`
const Wrapper =styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px #afaeae;


    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;


    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    border-radius: .3rem;
    margin-left: 25px;
    padding: 5px;
    cursor: pointer;


    ${mobile({ marginLeft: "20px" })}
`
const Input = styled.div`
    border: none;


    ${mobile({ width: "20px" })}
`

const Logo = styled.div`
    font-weight: bold;


    ${mobile({ fontSize: "22px" })}
`


const Center = styled.div`
    flex: 5;
    text-align: center;
    font-size: 25px;


    ${mobile({ flex: 3 })}
`
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color:  crimson;
    box-shadow: 2px 2px #888888;
    border-radius: .3rem;
    padding: 5px;


    ${mobile({ flex: 4, justifyContent: "center", padding: "4px" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;


    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color: "gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>ELDERMEN</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem> | </MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem> | </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar





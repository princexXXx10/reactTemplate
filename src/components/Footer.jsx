import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons';
import { mobile } from '../responsive';

import styled from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: #0b0b0b;
    color: white;


    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;


    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    flex: 1;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ELDERMEN</Logo>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Sequi, perspiciatis nam aspernatur sunt dolorem fuga eius voluptates
        </Description>
        <SocialContainer>
          <SocialIcon color="#385999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="#E60023">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="#0cbb00">
            <WhatsApp />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus asperiores
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>
          +234 23456789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/>
          contact@ebgames.gmail.com
        </ContactItem>
        <Payment src="https://w7.pngwing.com/pngs/117/675/png-transparent-visa-and-mastercard-ads-mastercard-credit-card-american-express-visa-debit-card-mastercard-text-payment-logo-thumbnail.png"/>
      </Right>
    </Container>
  )
}

export default Footer
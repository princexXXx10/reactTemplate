import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";


const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;


    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBotton = styled.button`
    padding: 10px;
    border-radius: 0.3rem;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;


    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;


    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const ProductName = styled.span`
    flex: 1;
`
const ProductPlatform = styled.span`
    flex: 1;
`
const ProductId = styled.span`
    flex: 1;
`

const Details = styled.span`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`

const ProductColor = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${props=>props.color};
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;


    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;


    ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
    border-radius: 0.3rem;
    border: none;
`


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopBotton>CONTINUE SHOPPING</TopBotton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopBotton typed="filled">CHECKOUT NOW</TopBotton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/648888/1.jpg?0616"/>
                <Details>
                  <ProductName><b>Product:</b> METAL GEAR 5</ProductName>
                  <ProductPlatform><b>Console:</b> Xbox Series X</ProductPlatform>
                  <ProductId><b>ID:</b> 657849475784</ProductId>
                  <ProductColor color="black"/>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>N50000</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/648888/1.jpg?0616"/>
                <Details>
                  <ProductName><b>Product:</b> METAL GEAR 5</ProductName>
                  <ProductPlatform><b>Console:</b> Xbox Series X</ProductPlatform>
                  <ProductId><b>ID:</b> 657849475784</ProductId>
                  <ProductColor color="black"/>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>N50000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>N200000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>N200000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>-N200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>N200200</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
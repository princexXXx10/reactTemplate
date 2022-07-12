import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;


    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;


    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Games</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText></Filter>
        <Select>
          <Option disabled selected>
            Platforms
          </Option>
          <Option>Play Station</Option>
          <Option>Xbox</Option>
          <Option>Nintendo</Option>
          <Option>PC</Option>
        </Select>

        <Select>
          <Option disabled selected>
            Size
          </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
        <Filter><FilterText>Sort Products:</FilterText></Filter>
        <Select>
          <Option selected>
            Popularity
          </Option>
          <Option>Newest</Option>
          <Option>Lowest Price</Option>
          <Option>Highest Price</Option>
        </Select>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
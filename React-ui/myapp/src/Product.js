import  { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  background-color:wheat;
`;
const StyledImg =styled.img`
    width:200px;
    height:200px;
`

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log( error);
      });
  }, []);

  const handleNextClick = () => {
    setStartIndex(startIndex + 3);
  };
  const handleBackClick=()=>{
    setStartIndex(startIndex=>0 && startIndex-3)
  }
  const displayProducts = products.slice(startIndex, startIndex + 3).map(product => (
    <Card key={product.id}>
      <h3>{product.name}</h3>
      <p><StyledImg src={product.image}></StyledImg></p>
    </Card>
  ));
  return (
    <div>
      <Container>
        {displayProducts}
      </Container>
      {startIndex + 3 < products.length && (
        <Button onClick={handleNextClick}>Next</Button>
      )}
       {startIndex >= 3&&(
        <Button onClick={handleBackClick}>Back</Button>
      )}
    </div>
  );
};

export default ProductDetails;

import styled from "styled-components";
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 20px;
`;
const GridItem =styled.div`
    background-color:green;
`
function Container() {
  return (
  <GridContainer>
    <GridItem>hello</GridItem>
    <GridItem>hello</GridItem>
    <GridItem>hello</GridItem>
    <GridItem>hello</GridItem>
  </GridContainer>
  );
}
export default Container;
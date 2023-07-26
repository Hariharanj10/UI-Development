import styled from 'styled-components'
import { Link } from 'react-router-dom';
const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px;
  pading: 10px;
  font-weight: bold;
`;
const StyledHeaded = styled.div`
  display: flex;
  height: 77px;
  justify-content: space-between;
  align-items: center;
  background-color: #2873f0;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 20px;
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
`;
const StyledLink =styled(Link)`
    color:white;
    text-decoration:none;
    margin:10px;
    padding:10px;
`
const Header = () => {
  return (
    <>
      <StyledHeaded>
        <StyledItem>
          <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="about">About</StyledLink>
          </div>
        </StyledItem>
        <StyledItem>
        <StyledLink to="signIn">Sign In</StyledLink>
        </StyledItem>
      </StyledHeaded>
    
    </>
  );
};
export default Header;

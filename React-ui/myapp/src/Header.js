import styled from 'styled-components'
import './Header.css'


const LinkButton = styled.a`
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight:bold;
`;

const Header = () => {
  return (
    <>
    
      <div className="header">
        <div className="right-nav">
          <h1>logo</h1>
          <button>submit</button>
        </div>
        <div className="left-nav">
          <LinkButton href="#">Home</LinkButton>
          <LinkButton href="#">Contact</LinkButton>
          <LinkButton href="#">About</LinkButton>
          <LinkButton href="#">Sign up</LinkButton>
        </div>
      </div>
    </>
  );
};
export default Header;

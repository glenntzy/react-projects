import styled from 'styled-components';
import {Link as Links} from 'react-router-dom';

export const NavigationBar = styled.nav`
  padding: 20px; 
  display: flex;
  align-items: center; 
  max-width: 600px;
  margin: 0 auto; 
  border-bottom: 1px solid #f2f2f2;
`

export const Logo = styled.h1
`color: #f1356d;`

export const NavLink = styled(Links)
`    margin-left: 16px; 
      text-decoration:none; 
      padding: 6px;
`

export const NavMenu = styled.div
`
margin-left: auto;
`
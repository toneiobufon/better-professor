import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
   display: flex;
   justify-content: space-around;
   align-items: center;
   background-color: #4169E1;
   color: white;
   
`;

const TitleWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 30%;
`;

const HeaderTitle = styled.h1`

`;

const NavWrapper = styled.div`
   display: flex;
   justify-content: space-evenly;
   width: 50%;

   a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
   }
`;

const NavigationHeader = (props) => {
   console.log('nav props', props)
   const locationURL = props.location.pathname
   const logOut = e => {
      localStorage.removeItem('token');
      localStorage.removeItem('id')
   }
   let navLink = ''
   if (locationURL === '/login') {
      navLink = <Link to='/signup'>Register</Link>
   } else if (locationURL === '/signup') {
      navLink = <Link to='/login'>Login</Link>
   } else {
      navLink = (
         <NavWrapper>
            <Link to='/'>Dashboard</Link>
            <Link to='/login' onClick={logOut}>Logout </Link>
         </NavWrapper>

      )
   }
   return (
      <Header>
         <TitleWrapper>
            <HeaderTitle>Better Professor</HeaderTitle>
         </TitleWrapper>
         <NavWrapper>
            {navLink}
         </NavWrapper>
      </Header>
   )
}

export default NavigationHeader
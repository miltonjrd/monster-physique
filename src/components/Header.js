// dependencies
import { useState } from 'react';
import styled from "styled-components";

// components
import LoginModal from "./LoginModal";

// images
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: sticky;
  height: 80px;
  background: #fff;
  box-shadow: 0 2px 2px rgb(0, 0, 0, .2), 0 4px 4px rgb(0, 0, 0, .1);


  * {
  margin:0;
  padding:0;
  list-style:none;
  text-decoration:none;
 }
 body {

  font-size:18px;
 }
 a, a:visited {
  color:#6e6a6a;
 }

/*--------------ESTILO MENU*/ 
 nav {
  background:#fff;
  width:100%;
  height:100px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
 }
 nav ul li {
color:black;
  display:inline-block;
 }

 nav ul li:hover {
color: blue;

 }


 nav ul li a {
  display:block;
  padding:38px 20px;
  transition: all 0.6s ease;
 }
 nav ul li a:hover {
  color: black;
 }
 .titulo-blog, .titulo-blog:visited {
  color:#FBB829;
  font-weight:600;
  text-transform:uppercase;
 }
 a.titulo-blog:hover {
  background:none;
  color:#FBB829;
 }
`;


const Header = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);

  return (
    <StyledHeader>
        {/* <img src={Logo} alt="Logo" /> */}
        {/*   <Link path="/simulator">Simulador</Link> */}
        <nav>
          <ul className='text-center'>
            <li><a href="#" class="titulo-blog">Monster Physique</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <Link path="/simulator">Simulador</Link>
  
            <button style={{marginLeft:"150px",width:"147px",height:"46px"}} 
            type="button" className="btn btn-warning">Orçamento</button>  {/*IGNORAR O MARGIN-LEFT*/}
          </ul>
        </nav>
  

    </StyledHeader>
  );
};

export default Header;
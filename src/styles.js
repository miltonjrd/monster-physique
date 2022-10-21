import styled from 'styled-components'

export const Menu = styled.menu` 
    height: 60px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0 4px 4px -2px #989898;
    

`

export const Button = styled.button` 

    border-radius: 15px;
    margin-top: 12px;
    width: 134px;
    height: 34px;
    margin-left: 1153px;
    border: white;
    cursor: pointer;

    strong {
        font-family: 'Montserrat';
    font-size: 14px;
    }

Button:hover {
  background-color: white;
}


`
export const HeaderImage = styled.div`
    margin-left: -1216px;
  background-image: url('../../imagem/logo insta.png');
`
export const ContainerShirt = styled.div`
    width: 432px;
    height: 345px;
    margin-top: 468px;
    padding: 82px;
    margin-left: 381px;
    background-color: #eaeaea;
`

export const Shirt = styled.div`
width: 50px;

img {
    margin-top: -76px;
    margin-left: -37px;
    padding: 10px;
    width: 317px;
    padding: 10px;
    width: 327px;
}



`
export const ButtonShirt = styled.div`
background-color: #ffc107;
    border-radius: 15px;
    margin-top: 341px;
    width: 173px;
    height: 36px;
    margin-left: 43px;
    border: white;
    cursor: pointer;
  
}




    strong {
    font-family: 'Montserrat';
    font-size: 18px;
    margin-top: -2px;
    margin-left: 49px;
    padding: 6px;
    
    }
.btn-danger {
    background-color: red;
    border-radius: 15px;
    margin-top: 10px;
    width: 173px;
    height: 36px;
    margin-left: 0px;
    border: white;
    cursor: pointer;
}

.btn-danger:hover{
background-color: #ec3a3a;
}


.square-rotation{
    width: 75px;
    margin-top: -394px;
    height: 65px;
    margin-left: 226px;
    background-color: #3e3e3a;
    border-radius: 4px;

    
}

`
export const MenuNav = styled.div `
width: 100px;


.side-navbar {
  width: 180px;
  height: 100%;
  position: fixed;
  margin-left: -300px;
  background-color: #100901;
  transition: 0.5s;
}
.nav-link:active,
.nav-link:focus,
.nav-link:hover {
  background-color: #ffffff26;
}
.my-container {
  transition: 0.4s;
}
.active-nav {
  margin-left: 0;
}

.active-cont {
  margin-left: 180px;
}
#menu-btn {
  background-color: #100901;
  color: #fff;
  margin-left: -62px;
}

//MENU LATERAL

* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Lato", sans-serif;
  line-height: 1;
  
}

body {
  background-color: #F5F6F8;
  overflow: hidden;
}

.sidebar-navigation {
  display: inline-block;
    margin-top: 48px;
    width: 91px;
    margin-left: 55px;
    background-color: #313443;
    box-shadow: 0 4px 4px -2px #989898;
    border-radius: 10px;
    height: 330px;
    box-shadow: 0 4px 4px -2px #989898;
}
.sidebar-navigation ul {
  text-align: center;
  color: white;
}
.sidebar-navigation ul li {
  padding: 28px 0;
  cursor: pointer;
  transition: all ease-out 120ms;
}
.sidebar-navigation ul li i {
  display: block;
  font-size: 24px;
  transition: all ease 450ms;
}
.sidebar-navigation ul li .tooltip {
  display: inline-block;
  position: absolute;
  background-color: #313443;
  padding: 8px 15px;
  border-radius: 3px;
  margin-top: -26px;
  left: 170px;
  opacity: 0;
  visibility: hidden;
  font-size: 13px;
  letter-spacing: 0.5px;
}
.sidebar-navigation ul li .tooltip:before {
  content: "";
  display: block;
  position: absolute;
  left: -4px;
  top: 10px;
  transform: rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: inherit;
}
.sidebar-navigation ul li:hover {
  background-color: #22252E;
}
.sidebar-navigation ul li:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
.sidebar-navigation ul li.active {
  background-color: #22252E;
}
.sidebar-navigation ul li.active i {
  color: #98D7EC;
}


`

//LOGIN MODAL

export const  LoginModal = styled.div`
.container {
   font-family: 'Montserrat';
  padding: 2rem 0rem;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 400px;
  }
  .modal-dialog .modal-content {
    padding: 1rem;
  }
}
.modal-header .close {
  margin-top: -1.5rem;
}

.form-title {
  margin: -2rem 0rem 2rem;
  font-family: 'Montserrat';
}

.btn-warning {
  border-radius: 3rem;
  font-family: 'Montserrat';
}

.delimiter {
  padding: 1rem;
}

.social-buttons .btn {
  margin: 0 0.5rem 1rem;

}

.signup-section {
  padding: 0.3rem 0rem;
  
 font-family: 'Montserrat';



}







`



export const Modal = styled.div `



.h1-1 {
  font-family: 'Montserrat';
  font-size: 14px;
}

`


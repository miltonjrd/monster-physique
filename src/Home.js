import React, { Components } from 'react'
import { Menu, Button, HeaderImage, ContainerShirt, ButtonShirt, Shirt, MenuNav, Modal } from './styles'
import GlobalStyle from './styles/global'
import { FaSyncAlt } from 'react-icons/fa'



function Home() {
  return (
    <>
      <Menu>
        <Button>
          <strong>Entrar</strong>
        </Button>
        <HeaderImage>
          <strong>logo</strong>
        </HeaderImage>
        <ContainerShirt>
          <Shirt>
            <img src="https://o.remove.bg/downloads/a1935021-3067-4164-85f4-077a3e58da3e/7011b22e2ba6da33b158260c4645fa53-removebg-preview.png" alt="LOGO" />
          </Shirt>
          <ButtonShirt>
            <div style={{ flex: 1, padding: 6, marginLeft: -10, marginTop: -56, }}>
              <strong style={{ marginLeft: "54px", fontFamily: "Montserrat", padding: "6px" }}>Frente</strong>
            </div>
            <button type="button " class="btn btn-danger"></button>
            <div style={{ flex: 1, padding: 10, marginLeft: -10, marginTop: -40 }}>
              <strong style={{ fontSize: "14px", marginLeft: "54px", color: "white" }}>Descartar</strong>
            </div>
            <div className='square-rotation'>
              <FaSyncAlt style={{ color: "white", width: "50px", marginTop: "4px", marginLeft: "13px", cursor: "pointer" }} />
              <strong> <p style={{
                fontSize: "11px", marginLeft: "13px",
                marginTop: "-19", color: "white"
              }}>Girar 180</p> </strong>
            </div>
          </ButtonShirt>
        </ContainerShirt>
      </Menu>
      <section className='container-menu'>
        <MenuNav>
          <nav class="sidebar-navigation">
            <ul>
              <li class="active">

                <span class="tooltip">Connections</span>
              </li>
              <li>

                <span class="tooltip">Devices</span>
              </li>
              <li>

                <span class="tooltip">Contacts</span>
              </li>
              <li>

                <span class="tooltip">Fax</span>
              </li>
              <li>

                <span class="tooltip">Settings</span>
              </li>
            </ul>
          </nav>
        </MenuNav>
      </section>
      <Modal>
      </Modal>
      <GlobalStyle />
    </>
  );
}


export default Home;

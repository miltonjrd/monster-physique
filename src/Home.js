import React, { Components } from 'react'
import { Menu, Button, HeaderImage, ContainerShirt, ButtonShirt, Shirt, MenuNav, Modal, LoginModal } from './styles'
import GlobalStyle from './styles/global'
import { FaSyncAlt } from 'react-icons/fa'



function Home() {
  return (
    <>
      <Menu>
        <Button>
          <strong></strong>
        </Button>
        <HeaderImage>
          <strong>logo</strong>
        </HeaderImage>
        <ContainerShirt>
          <Shirt>
            <img src="https://o.remove.bg/downloads/3b2e793f-e594-4b34-8a2b-c101428304ac/image-removebg-preview.png" alt="LOGO" />
          </Shirt>
          <ButtonShirt>
            <div style={{ flex: 1, padding: 6, marginLeft: -10, marginTop: -284, }}>
              <strong style={{ marginLeft: "54px", fontFamily: "Montserrat", padding: "6px" }}>Frente</strong>
            </div>
            <div className='square-rotation'>
              <FaSyncAlt style={{ color: "white", width: "50px", marginTop: "4px", marginLeft: "13px", cursor: "pointer" }} />
              <strong>
                <h1 style={{ fontSize: "14px", color: "white", marginLeft: "5", marginTop: "-14px" }}>
                  girar 360
                </h1>
              </strong>
            </div>
          </ButtonShirt>
        </ContainerShirt>
      </Menu>


     
      <MenuNav>
        <nav className="sidebar-navigation">
          <ul>
            <li className="active">

              <span className="tooltip"></span>
            </li>
            <li>

              <span className="tooltip"></span>
            </li>
            <li>

              <span className="tooltip"></span>
            </li>
            <li>

              <span class="tooltip"></span>
            </li>
            <li>

              <span class="tooltip"></span>
            </li>
          </ul>
        </nav>
      </MenuNav>


      <Modal>




        <section className="modal-reset">
          <div style={{ marginLeft: "627px", marginTop: "79px" }} className="button-rotation">
            <button style={{ borderRadius: "14px", marginTop: "10px", marginLeft: "0", border: "white", width: "173px", height: "36px" }} type="button" class="btn btn-danger btn-lg mt-2 ml-2" data-toggle="modal" data-target="#meuModal">
              <h1 className='h1-1'>
                Resetar mudanças
              </h1>
            </button>
          </div>
          <div id="meuModal" className="modal fade" role="dialog">
            <div className="modal-dialog">


              <div className="modal-content">


                <div className="modal-header">
                  <h4 className="modal-title">Camisa modelo bla bla</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>


                <div className="modal-body">
                  <p>Tem certeza que voce deseja</p>
                  <p>excluir?</p>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                  <button type="button" className="btn btn-warning">Salvar</button>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Modal>

      <LoginModal>

        <section className="modal-login">
          <div className="container">
            <div style={{ marginTop: "-584px", marginLeft: "1068px" }} className="moldal-pointer">
              <button style={{ width: "147px" }} type="button" className="btn btn-info btn-warning" data-toggle="modal" data-target="#loginModal">
                Login
              </button>
            </div>
          </div>
          <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-title text-center">
                    <h4>Login</h4>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email1" placeholder="Seu email"></input>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" id="password1" placeholder="Sua senha"></input>
                      </div>
                      <button type="button" className="btn btn-info btn-block btn-warning">Login</button>
                    </form>

                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <div className="signup-section">Crie sua conta <a href="#a" className="text-info">Clique Aqui</a>.</div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </LoginModal>



      <GlobalStyle />
    </>
  );
}


export default Home;

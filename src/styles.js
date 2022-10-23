import styled from 'styled-components'

export const Header = styled.header`
    position: sticky;
    height: 80px;
    background: #fff;
    box-shadow: 0 2px 2px rgb(0, 0, 0, .2), 0 4px 4px rgb(0, 0, 0, .1);
`

export const Button = styled.button` 

  border-radius: 15px;
  height: 34px;
  border: white;
  cursor: pointer;

  strong {
      font-family: 'Montserrat';
  font-size: 14px;
  }

  :hover {
    background-color: white;
  }
`

export const ContainerShirt = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: .25rem;
  padding: .5rem;

  img, svg {
    height: 345px;
  }

  img {
    mix-blend-mode: multiply;
  }

  svg {
    position: absolute;
    left: 0;
  }
`

export const Menu = styled.aside`
  display: flex;

  ul {
    align-self: flex-start;
    background-color: #3e3e3a;
    width: 100px;
    border-radius: .5rem;
    list-style: none;
    padding: 0;
    margin: 0;

    &.active {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      height: 100px;
      width: 100px;
      border-radius: .5rem;
      text-align: center;

      &.gold {
        background-color: #ffe600;
        color: #000;

        :hover, &.active {
          background-color: #f7df00;
        }
      }


      :hover, &.active {
        cursor: pointer;
        background-color: #31312b;
      }
    }

  }

  .custom {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 600px;
    width: 400px;
    border: 1px solid #3e3e3a;
    border-radius: .25rem;
    border-top-left-radius: 0;
  }
`

//LOGIN MODAL

export const LoginModal = styled.div`
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
}

`
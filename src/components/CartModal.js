// dependencies
import { useState, useEffect, useContext } from 'react';
import { Modal, CloseButton } from "react-bootstrap";
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { IoMdBusiness } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import api, { useApi } from '../api';

// context
import LoaderContext from '../context/LoaderContext';
import SimulatorContext from '../context/SimulatorContext';
import ModalContext from '../context/ModalContext';
import PopupContext from '../context/PopupContext';

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: .5rem;
  width: 100%;

  input {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  tbody tr {
    height: 50px;
    
    td {
      padding: .5rem;

      .trash-btn {
        color: gray;
        transition: color ease .5s;

        :hover {
          color: #fc4850;
        }
      }
    }

    :nth-child(even) {
      background-color: #f7f7f7;
    }
  }
`;


const CartModal = () => {
  // 0 para pessoa física, 1 para pessoa jurírica
  const [formType, setFormType] = useState(0);
  const [form, setForm] = useState({
    cpf: '',
    cnpj: '',
    email: '',
    whatsapp: '',
    birthdate: ''
  });
  const [canSubmit, setCanSubmit] = useState(false);

  const { context: modalContext, setContext: setModalContext } = useContext(ModalContext);
  const { setContext: setLoaderContext } = useContext(LoaderContext);
  const { setContext: setPopupContext } = useContext(PopupContext);

  const { data: items, error, mutate } = useApi('cart');

  const regex = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    whatsapp: /^\d{11}$/,
    birthdate: /^\d{4}-\d{2}-\d{2}$/,
    cpf: /^\d{11}$/,
    cnpj: /^\d{14}$/
  };

  const handleCpfMask = (value) => {
    if (!value) return '';
    let mask = value.replaceAll(/\D/g, '');
    mask = mask.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/g, "$1.$2.$3-$4");
    return mask;
  };

  const handleCnpjMask = (value) => {
    if (!value) return '';
    let mask = value.replaceAll(/\D/g, '');
    mask = mask.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/g, "$1.$2.$3.$4-$5");
    return mask;
  }

  const handleWhatsappNumberMask = (value) => {
    if (!value) return '';
    let mask = value.replaceAll(/\D/g, '');
    mask = mask.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/g, "$1 $2 $3-$4");
    return mask;
  };

  const handleInputChange = (evt) => {
    const target = evt.target;
    
    if (regex[target.name].test(target.value)) {
      target.classList.add('is-valid');
      target.classList.remove('is-invalid');
    } else {
      target.classList.remove('is-valid');
      target.classList.add('is-invalid');
    }

    setForm({
      ...form,
      [evt.target.name]: target.value
    });
  };

  const validateFields = () => {
    for (let key in form) {
      if (regex[key] && !regex[key].test(form[key]))
        return setCanSubmit(false);
    }
    setCanSubmit(true);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      setLoaderContext(true);
      const { data } = await api.post('budgets', form);
      mutate();
      setLoaderContext(false);
      setPopupContext(state => [...state, { title: data.status, text: data.message }]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    mutate();
  }, [modalContext.CART]);

  useEffect(() => {
    validateFields();
  }, [form]);

  useEffect(() => {
    if (!formType) {
      delete form.cnpj;
    } else {
      delete form.cpf;
      delete form.birthdate;
    }
  }, [formType]);

  return (
    <Modal 
      show={modalContext.CART}
      size="lg" 
      fullscreen="sm-down" 
      dialogClassName="h-100 my-0 me-0" 
      contentClassName="rounded-0 h-100"
    >
      <Modal.Body>
        <div className="d-flex justify-content-end mb-4">
          <CloseButton onClick={() => setModalContext(state => ({ ...state, CART: false }))} className="shadow-none" />
        </div>

        <h4 className="d-flex align-items-center mb-4">
          <AiOutlineShoppingCart className="me-3" />
          Meu carrinho
        </h4>
        {
          !items?.length ?
          <div className="d-flex justify-content-center align-items-center" style={{ height: 400 }}>
            <span className="text-muted">Não há itens no seu carrinho.</span>
          </div> :
          <>
            <section className='mb-5'>
              <Table className="border-bottom">
                <thead>
                  <tr>
                    <th>Modelo</th>
                    <th>Tecido</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items?.map((item, i) => (
                      <tr key={item.id}>
                        <td>
                          <small>{item.template_name}</small>
                        </td>
                        <td>
                          <small>
                            <select className="border p-2">
                              <option>Algodão</option>
                              <option>Algodão</option>
                              <option>Algodão</option>
                            </select>
                          </small>
                        </td>
                        <td>
                          <input 
                            className="border bg-light "
                            style={{ width: 50 }}
                            type="number" 
                            defaultValue={1}
                            onChange={(evt) => {
                              if (evt.target.value[0] === '0') {
                                evt.target.value = evt.target.value.substring(1);
                              }

                              if (evt.target.value.length < 1) 
                                evt.target.value = 0;
                            }}
                          />
                        </td>
                        <td>
                          <button className="btn border-0 trash-btn"
                            onClick={() => {
                              api.delete(`/cart/${item.id}`);
                              mutate();
                            }}
                          >
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </section>

            <div className="d-flex gap-3">
              <button 
                className={`btn btn-${formType ? 'outline-' : ''}dark rounded-0`}
                onClick={() => setFormType(0)}
              >
                Pessoa física
              </button>
              <button 
                className={`btn btn-${!formType ? 'outline-' : ''}dark rounded-0`}
                onClick={() => setFormType(1)}
              >
                Pessoa jurídica
              </button>
            </div>
            <form className='d-flex flex-column gap-3 mt-5' onSubmit={handleSubmit}>
              <small className="text-muted">Seus dados são importantes para podermos identificar você no sistema!</small>
              {
                !formType ?
                <div className="d-flex gap-3">
                  <Label>
                    <BsFillPersonLinesFill size={24} />
                    <div>
                      <small className="text-muted">CPF *</small>
                      <input 
                        name="cpf"
                        type="text"
                        className="form-control border-0 border-bottom rounded-0"
                        placeholder="000.000.000-00" 
                        autoComplete="off"
                        value={handleCpfMask(form.cpf)}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Label>
                  <Label>
                    <AiOutlineCalendar size={24} />
                    <div>
                      <small className='text-muted'>Data de nascimento *</small>
                      <input 
                        name="birthdate"
                        type="date"
                        className="form-control border-0 border-bottom rounded-0" 
                        placeholder="Data de nascimento *" 
                        autoComplete="off"
                        value={form.birthdate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Label>
                </div> :
                <Label>
                  <IoMdBusiness size={24} />
                  <div className="w-100">
                    <small className="text-muted">CNPJ *</small>
                    <input 
                      name="cnpj"
                      type="text"
                      className="form-control border-0 border-bottom rounded-0"
                      autoComplete="off"
                      placeholder='00.000.000.0000-00'
                      value={handleCnpjMask(form.cnpj)}
                      onChange={handleInputChange} 
                    />
                  </div>
                </Label>
              }

              <div className="d-flex gap-3">
                <Label>
                  <AiOutlineMail size={24} />
                  <div>
                    <small className='text-muted'>E-mail *</small>
                    <input 
                      name="email"
                      className="form-control border-0 border-bottom rounded-0" 
                      placeholder="exemplo@gmail.com" 
                      autoComplete="off"
                      value={form.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </Label>
                <Label>
                  <AiOutlineWhatsApp size={24} />
                  <div>
                    <small className='text-muted'>Whatsapp (com DDD) *</small>
                    <input 
                      name="whatsapp"
                      className="form-control border-0 border-bottom rounded-0" 
                      placeholder="00 0 0000-0000" 
                      autoComplete="off"
                      value={handleWhatsappNumberMask(form.whatsapp)}
                      onChange={handleInputChange}
                    />
                  </div>
                </Label>
              </div>
              
              <button 
                type="submit"
                className="btn btn-primary align-self-end"
                disabled={!canSubmit}
              >
                Pedir orçamento
              </button>
            </form>
          </>
        }
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
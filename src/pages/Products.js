// dependencies
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from "styled-components";

import { useApi, baseUrl } from '../api';

// images
import TexturaFrente from '../images/texturaFrente.png';

// context
import SimulatorContext from '../context/SimulatorContext';

const Card = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 350px;
    flex: 1;
    padding: .5rem;
    

    .simulate {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity ease-out .3s;
    }

    :hover {
        .simulate {
            opacity: 1;
        }
    }
`;

const Mockup = styled.img`
    width: 175px;
`;

const Products = () => {
    const { data: templates } = useApi('/templates');

    const navigate = useNavigate();

    const { setContext: setSimulatorContext } = useContext(SimulatorContext);

    const handleSimulate = (template) => {
        setSimulatorContext(state => ({ ...state, template }));
        navigate('/simulator');
    };

    return (
        <>
            <div className='bg-dark py-5'>
                <div className="container d-flex gap-4">
                    {
                        templates?.map((template) => (
                            <Card>
                                <div className="text-center" style={{ flex: 1 }}>
                                    <button 
                                        className="btn btn-primary simulate" 
                                        onClick={() => handleSimulate(template)}
                                    >
                                        Simular camiseta
                                    </button>
                                    <Mockup src={`${baseUrl}/storage/mockups/${template.mockup_front}`} alt="" />
                                </div>
                                <div className='d-flex justify-content-center bg-secondary gap-3 py-4'>
                                    <div className="d-flex flex-column text-center">
                                        <small className='text-white'>50-96PÇ</small>
                                        <strong className='text-white'>R$ 10.00</strong>
                                    </div>
                                    <div className="d-flex flex-column text-center">
                                        <small className='text-white'>50-96PÇ</small>
                                        <strong className='text-white'>R$ 10.00</strong>
                                    </div>
                                    <div className="d-flex flex-column text-center">
                                        <small className='text-white'>50-96PÇ</small>
                                        <strong className='text-white'>R$ 10.00</strong>
                                    </div>
                                    <div className="d-flex flex-column text-center">
                                        <small className='text-white'>50-96PÇ</small>
                                        <strong className='text-white'>R$ 10.00</strong>
                                    </div>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Products;
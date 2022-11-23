// dependencies
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";



const ContainerShirts = styled.div`

.col{
    width: 100px;
    height:100px;
    background-color: black;
}

.row {
    background-color: black;
}
.container-edition {
    width: 236px;
    margin-top: 239px;
    height: 62px;
    margin-left: -260px;
    background-color: #4d4d4d;
    
    
    }
    
`
const Card = styled.article`
    background: #fff;
    height: 300px;
    flex: 1;

.camisa-1 {

    width: 282px;
    height: 279px;
    margin-left: -293px;
    vertical-align: middle;
    
}

}


    

`;



const Products = () => {


    return (
        <>
            <ContainerShirts className=''>

                <div className='bg-dark py-5'>
                    <div
                        className="container d-flex p-3 gap-4">
                        <Card className='card-1' />
                        <div 
                        style={{ margin: "-9" }}>

                            <div className='container-edition'>
                                <small className='text-white m-1'>50-96PÇ</small>
                                <small className='text-white  m-3 '>50-96PÇ</small>
                                <small className='text-white  m-2 '>50-96PÇ</small>

                                <div className='d-flex'>

                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                </div>
                            </div>
                        </div>
                        <Card className='card-2' />
                        <div 
                        style={{ margin: "-9" }}>

                            <div className='container-edition'>
                                <small className='text-white m-1'>50-96PÇ</small>
                                <small className='text-white  m-3 '>50-96PÇ</small>
                                <small className='text-white  m-2 '>50-96PÇ</small>

                                <div className='d-flex'>

                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                </div>
                            </div>
                        </div>
                        <Card className='card-3' />
                        <div 
                        style={{ margin: "-9" }}>

                            <div className='container-edition'>
                                <small className='text-white m-1'>50-96PÇ</small>
                                <small className='text-white  m-3 '>50-96PÇ</small>
                                <small className='text-white  m-2 '>50-96PÇ</small>

                                <div className='d-flex'>

                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                </div>
                            </div>
                        </div>
                        <Card className='card-4' />
                        <div 
                        style={{ margin: "-9" }}>
                            
                            <div className='container-edition'>
                                <small className='text-white m-1'>50-96PÇ</small>
                                <small className='text-white  m-3 '>50-96PÇ</small>
                                <small className='text-white  m-2 '>50-96PÇ</small>

                                <div className='d-flex'>

                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                    <h2 className='text-white fs-6 m-1'>R$ 10.00</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </ContainerShirts>

        </>
    );
}

export default Products;
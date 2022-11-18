
import styled from 'styled-components';

const Card = styled.article`
    background: #fff;
    height: 300px;
    flex: 1;
`;

const Landing = () => {
    return (
        <main>
            <h2 className='container'>Informações pré <br/> orçamento e pedido</h2>
            <svg className="text-dark w-100" viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 0L0.5 99.5V100H1920V0Z" fill="currentColor"/>
            </svg>
            <div className='bg-dark py-5'>
                <div className="container d-flex p-3 gap-4">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <svg className="text-dark w-100" viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 100L0.5 0.5V0H1920V100Z" fill="currentColor"/>
            </svg>


        </main>
    );
};

export default Landing;
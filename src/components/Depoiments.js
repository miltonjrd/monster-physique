import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Card = styled.article`
    background: blue;
    height: 400px;
`;
const Clients = styled.div`


.text-produtions {
    margin-left: 453px;


}
.span-produtions {
font-size: 90px;
}
.text-atendidos { 
    margin-top: -138px;
    margin-left: 91px;
}
.text-fornecidos {

    margin-top: -139px;
    margin-left: 802px;

}


.section-top {

    margin-left: 96px;
    margin-top: 60px;
}

`;
const Depoiments = () => {
    return (
        <>
            <svg className="text-dark w-100" viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 0L0.5 99.5V100H1920V0Z" fill="currentColor" />
            </svg>
            <div className="bg-dark text-white">
                <section className="container py-5">
                    <h3>Depoimentos</h3>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={16}
                        loop
                        autoplay={{
                            delay: 5000
                        }}
                        pagination={{
                            clickable: true
                        }}
                        style={{
                            height: 400
                        }}
                    >
                        {
                            new Array(5).fill(0).map(() => (
                                <SwiperSlide>
                                    <div className='d-flex flex-column justify-content-center h-100 px-5'>
                                        <h6>Usuario</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est laborum.

                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </section>
            </div>
            <svg className="text-dark w-100" style={{ transform: 'scaleX(-1)' }} viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 100L0.5 0.5V0H1920V100Z" fill="currentColor" />
            </svg>

            {/*QUANTIDADE DE CLIENTS */}

            <Clients className="py-5">

                <section className='section-top'>
                    <div className='text-produtions'>
                        <span>Camisetas Produzidas</span>
                        <h1 className='span-produtions'>0000+</h1>
                    </div>
                    <div className='text-atendidos'>
                        <span>Clientes Atendidos</span>
                        <h1 className='span-produtions'>0000+</h1>
                    </div>
                    <div className='text-fornecidos'>
                        <span>Eventos Fornecidos</span>
                        <h1 className='span-produtions'>0000+</h1>
                    </div>
                </section>
            </Clients>
        </>
    );
}

export default Depoiments;
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

//* Estilos para Swiper *//
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css'; //Personalizado
import Image from "next/image";

interface IProps {
    images: string[];
    title: string;
    className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: IProps) => {

  return (
    <div className={ className }>
        <Swiper
            style={{
                width: '100vw',
                height: '500px'
            }}
            pagination
            autoplay={{
                delay: 5000
            }}
            modules={[FreeMode, Autoplay, Pagination]}
            className="mySwiper2"
        >
            {
                images.map( img => (
                    <SwiperSlide key={ img }>
                        <Image 
                            width={ 600 }
                            height={ 500 }
                            src={ `/products/${ img }` }
                            alt={ title }
                            className="object-fill"
                        />
                    </SwiperSlide>  
                ))
            }
        </Swiper>
    </div>
  )
}


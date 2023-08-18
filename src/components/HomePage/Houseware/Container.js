import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Container.scss"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import banner from "../../../assets/images/HomeAppliances/banner.png"
import home1 from "../../../assets/images/HomeAppliances/home1.png"
import home2 from "../../../assets/images/HomeAppliances/home2.png"
import home3 from "../../../assets/images/HomeAppliances/home3.png"
import home4 from "../../../assets/images/HomeAppliances/home4.png"
import home5 from "../../../assets/images/HomeAppliances/home5.png"
import home6 from "../../../assets/images/HomeAppliances/home6.png"
import home7 from "../../../assets/images/HomeAppliances/home7.png"
import Endow from './Endow';

import Fan from './Fan';

const Container = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState([<Endow />])
    return (
        <div className='container-home'>
            <div className='banner'>
                <img src={banner} alt='' />
            </div>
            <div className='box-home'>
                <div className='box'>
                    <div className='title'>
                        <span className="title-text">
                            Điện máy - gia dụng
                        </span>
                        <span className="search-all">Xem tất cả</span>
                    </div>
                    <div className='box-child'>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={7}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <div className='item' onClick={() => setThumbsSwiper(<Endow />)}>
                                    <div className='item-home'>
                                        <div><img src={home1} alt='' /></div>
                                        <span className='name'>Ưu đãi Online</span>
                                    </div>
                                </div>


                                <SwiperSlide>
                                    <div className='item' onClick={() => setThumbsSwiper(<Fan />)}>
                                        <div className='item-home' >
                                            <div><img src={home3} alt='' /></div>
                                            <span className='name'>Quạt điều hoà </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setThumbsSwiper(<Endow />)}>
                                        <div className='item-home' >
                                            <div> <img src={home2} alt='' /></div>
                                            <span className='name'>Nồi chiên không dầu</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setThumbsSwiper(<Fan />)}>
                                        <div className='item-home' >
                                            <div> <img src={home4} alt='' /></div>
                                            <span className='name'>Robot hút bụi</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setThumbsSwiper(<Endow />)}>
                                        <div className='item-home' >
                                            <div> <img src={home5} alt='' /></div>
                                            <span className='name'>Nồi cơm điện</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setThumbsSwiper(<Fan />)}>
                                        <div className='item-home'>
                                            <div> <img src={home6} alt='' /></div>
                                            <span className='name'>Máy lọc nước</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setThumbsSwiper(<Endow />)}>
                                        <div className='item-home' >
                                            <div><img src={home7} alt='' /></div>
                                            <span className='name'>Tivi</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            spaceBetween={10}
                            thumbs={thumbsSwiper}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Fan />
                                {/* <div>
                                    [{thumbsSwiper}]
                                </div> */}
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Container
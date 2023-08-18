import { Swiper, SwiperSlide } from 'swiper/react';
import "./Container.scss"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import Endow from './Endow';
import Fan from './Fan';
import "./Suggest.scss"
const Suggest = () => {
    const [thumsSwiper, setthumbsSwiper] = useState([<Fan />])

    return (
        <div>
            <div className='suggest-container'>
                <div className='suggest-box'>
                    <div className='title'>
                        <span className="title-text">
                            Gợi ý hôm nay
                        </span>
                        <span className="search-all">Xem tất cả</span>
                    </div>
                    <div className='box-child'>
                        <Swiper
                            onSwiper={setthumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={7}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <div className='item' onClick={() => setthumbsSwiper(<Endow />)}>
                                    <div className='item-home'>
                                        <span className='name'>Độc quyền</span>
                                    </div>
                                </div>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setthumbsSwiper(<Fan />)}>
                                        <div className='item-home' >
                                            <span className='name'>Top tìm kiếm</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setthumbsSwiper(<Endow />)}>
                                        <div className='item-home' >
                                            <span className='name'>Laptop giá sốc</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setthumbsSwiper(<Fan />)}>
                                        <div className='item-home' >
                                            <span className='name'>Phụ kiện Gaming</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setthumbsSwiper(<Endow />)}>
                                        <div className='item-home' >
                                            <span className='name'>Phụ kiện -50%</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setthumbsSwiper(<Fan />)}>
                                        <div className='item-home'>
                                            <span className='name'>Thiết bị âm thanh</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item' onClick={() => setthumbsSwiper(<Endow />)}>
                                        <div className='item-home' >
                                            <span className='name'>Phụ kiện du lịch</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            spaceBetween={10}
                            thumbs={thumsSwiper}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                {/* {thumsSwiper} */}
                                <Endow />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggest
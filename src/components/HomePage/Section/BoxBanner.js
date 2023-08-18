import { Swiper, SwiperSlide } from 'swiper/react';
import "./BoxBanner.scss"
import Page1 from "../../../assets/images/HomePage/Page1.png"
import Page2 from "../../../assets/images/HomePage/Page2.png"
import Page3 from "../../../assets/images/HomePage/Page3.png"
import Page4 from "../../../assets/images/HomePage/Page4.png"
import Page5 from "../../../assets/images/HomePage/Page5.png"
import Page6 from "../../../assets/images/HomePage/Page6.png"
import Page7 from "../../../assets/images/HomePage/Page7.png"
import Page8 from "../../../assets/images/HomePage/Page8.png"
import Page9 from "../../../assets/images/HomePage/Page9.png"
import { useState } from 'react';

const BoxBannner = (props) => {
    const [currentImg, setCurrentImg] = useState([])
    const settings = props.settings
    return (
        <div className='banner-container'>
            <div className='banner-box'>
                <div className='animation'>
                    <Swiper
                        {...settings}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={Page1} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={Page2} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={Page3} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={Page4} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={Page5} alt='' /></SwiperSlide>
                    </Swiper>
                    <div className='select'>
                        <div className='select-child' onClick={() => setCurrentImg(Page1)}>Z Fold5 | Z Flip5 giảm ngay 5 triệu</div>
                        <div className='select-child' onClick={() => setCurrentImg(Page2)}>Reno 10 256GB Từ 9.990.000Đ</div>
                        <div className='select-child' onClick={() => setCurrentImg(Page3)}>iPhone 14 Pro Max giảm đến 5.5 triệu</div>
                        <div className='select-child' onClick={() => setCurrentImg(Page4)}>Sắm Robot hút bụi Ecovacs ngay</div>
                        <div className='select-child' onClick={() => setCurrentImg(Page5)}>Redmi Note 12 giá sốc 3.890.000đ</div>
                    </div>
                </div>
                <div className='img-phone'>
                    <div>
                        <a href='https://fptshop.com.vn/dien-thoai/samsung-galaxy-a14'>  <img src={Page6} alt='' className='img-intro' /> </a>
                    </div>
                    <div>
                        <img src={Page7} alt='' className='img-intro' />
                    </div>
                    <div className='promotion'>
                        <span className='title-sale'>Tin Khuyến Mãi</span>
                        <div className='item-sale'>
                            <img src={Page9} alt='' className='img-child' /> <span className='title'>Sam sung giảm giá 5% cho HSSV</span>
                        </div>
                        <div className='item-sale'>
                            <img src={Page8} alt='' className='img-child' /> <span className='title'>Laptop Gaming giảm giá sốc đến 28 triệu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxBannner
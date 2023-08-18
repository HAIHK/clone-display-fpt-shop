import { Swiper, SwiperSlide } from 'swiper/react';
import "./PaymentOnline.scss"
import payment1 from "../../../assets/images/Payment/payment.png"
import payment2 from "../../../assets/images/Payment/payment15.png"
import payment3 from "../../../assets/images/Payment/payment16.png"
import payment4 from "../../../assets/images/Payment/payment17.png"
import payment5 from "../../../assets/images/Payment/payment18.png"
import payment6 from "../../../assets/images/Payment/payment19.png"
import utilis1 from "../../../assets/images/Payment/utilis1.png"
import utilis2 from "../../../assets/images/Payment/utilis2.png"
import utilis3 from "../../../assets/images/Payment/utilis3.png"
import utilis4 from "../../../assets/images/Payment/utilis4.png"
import select1 from "../../../assets/images/Payment/select1.png"
import select2 from "../../../assets/images/Payment/select2.png"
import select3 from "../../../assets/images/Payment/select3.png"


const PaymentOnline = (props) => {
    const settings = props.settings

    return (
        <div className="payment-container">
            <div className='box'>
                <div className='title'>
                    <span className="title-text">
                        Ưu đãi khi thanh toán online
                    </span>
                </div>
                <div className="payment-box">
                    <Swiper
                        {...settings}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="box-child">
                                <a href="/" >
                                    <img src={payment1} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-child">
                                <a href="/" >
                                    <img src={payment2} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-child">
                                <a href="/" >
                                    <img src={payment3} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-child">
                                <a href="/" >
                                    <img src={payment4} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-child">
                                <a href="/" >
                                    <img src={payment5} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-child">
                                <a href="/" >
                                    <img src={payment6} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='box-utilities'>
                <div className='title'>
                    <span className='title-name'>Dịch vụ tiện ích</span>
                    <span className='search-all'>Xem tất cả</span>
                </div>
                <div className='utilities'>
                    <div className='item' style={{ background: "#f0fff4" }}>
                        <div className='item-child'>
                            <div className='img-box'>
                                <img src={utilis1} alt='' />
                            </div>
                            <div className='title-text' >
                                <span className='text-title'>Thanh toán tiền nước</span>
                                <span className='text-child'>Thanh toán nhanh chóng, tiện lợi</span>
                            </div>
                        </div>
                    </div>
                    <div className='item' style={{ background: "#fefae8" }}>
                        <div className='item-child'>
                            <div className='img-box'>
                                <img src={utilis2} alt='' />
                            </div>
                            <div className='title-text'>
                                <span className='text-title'>Thanh toán tiền điện</span>
                                <span className='text-child'>Thanh toán nhanh chóng, tiện lợi</span>
                            </div>
                        </div>
                    </div>
                    <div className='item' style={{ background: "#ebf8ff" }}>
                        <div className='item-child'>
                            <div className='img-box'>
                                <img src={utilis3} alt='' />
                            </div>
                            <div className='title-text'>
                                <span className='text-title'>Thẻ cào điện thoại</span>
                                <span className='text-child'>Giảm 2% cho thẻ có mệnh giá từ 100.000đ</span>
                            </div>
                        </div>
                    </div>  <div className='item' style={{ background: "#ffebeb" }}>
                        <div className='item-child'>
                            <div className='img-box'>
                                <img src={utilis4} alt='' />
                            </div>
                            <div className='title-text'>
                                <span className='text-title'>Thẻ game</span>
                                <span className='text-child'>Giảm 2% cho thẻ có mệnh giá từ 100.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-accessory'>
                <div className='title'>
                    <span className='title-name'>Phụ kiện hot</span>
                </div>
                <div className='box'>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-medal icon"></i></div>
                        <div className='name-item'>Phụ kiện nổi bật</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-rectangle-list icon"></i></div>
                        <div className='name-item'>Bao da ốp lưng</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-battery-full icon"></i></div>
                        <div className='name-item'>Sạc dự phòng</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-sim-card icon"></i></div>
                        <div className='name-item'>Thẻ nhớ</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-brands fa-apple icon"></i></div>
                        <div className='name-item'>Phụ kiện Apple</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-mobile-button icon"></i></div>
                        <div className='name-item'>Miếng dán màn hình</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-headphones-simple icon"></i></div>
                        <div className='name-item'>Tai nghe</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-paintbrush icon"></i></div>
                        <div className='name-item'>Mực in</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-bullhorn icon"></i></div>
                        <div className='name-item'>Loa</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-hard-drive icon"></i></div>
                        <div className='name-item'>USB - Ổ cứng</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-charging-station icon"></i></div>
                        <div className='name-item'>Sạc cáp</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-computer-mouse icon"></i></div>
                        <div className='name-item'>Chuột</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-keyboard icon"></i></div>
                        <div className='name-item'>Bàn phím</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-bag-shopping icon"></i></div>
                        <div className='name-item'>Balo - Túi xách</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-tv icon"></i></div>
                        <div className='name-item'>TV BOX</div>
                    </div>
                    <div className='item'>
                        <div className='icon-item'><i class="fa-solid fa-clock icon"></i></div>
                        <div className='name-item'>Phụ kiện Khác</div>
                    </div>
                </div>
            </div>
            <div className='box-select'>
                <div className='box-item'>
                    <img src={select1} alt='' />
                </div>
                <div className='box-item'>
                    <img src={select2} alt='' />
                </div>
                <div className='box-item'>
                    <img src={select3} alt='' />
                </div>
            </div>
        </div >
    )
}

export default PaymentOnline
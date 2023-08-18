import "./Promotion.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import frame from "../../../assets/images/Promotion/frame.png"
import promotion1 from "../../../assets/images/Promotion/promotion1.jpg"
import promotion2 from "../../../assets/images/Promotion/promotion2.jpg"
import promotion3 from "../../../assets/images/Promotion/promotion3.jpg"
import promotion4 from "../../../assets/images/Promotion/promotion4.jpg"
import promotion5 from "../../../assets/images/Promotion/promotion5.jpg"
import promotion6 from "../../../assets/images/Promotion/promotion6.jpg"
import promotion7 from "../../../assets/images/Promotion/promotion7.jpg"
import promotion8 from "../../../assets/images/Promotion/promotion8.jpg"
import promotion9 from "../../../assets/images/Promotion/promotion9.jpg"
import promotion10 from "../../../assets/images/Promotion/promotion10.jpg"
import promotion11 from "../../../assets/images/Promotion/promotion11.jpg"
import endow1 from "../../../assets/images/Promotion/endow1.jpg"
import endow2 from "../../../assets/images/Promotion/endow2.png"
import salestudent from "../../../assets/images/Banner/salestudent.png"
import sale1 from "../../../assets/images/Banner/sale1.png"
import sale2 from "../../../assets/images/Banner/sale2.png"
import sale3 from "../../../assets/images/Banner/sale3.png"
import sale4 from "../../../assets/images/Banner/sale4.png"
import sale5 from "../../../assets/images/Banner/sale5.png"


const Promotion = (props) => {
    const setting = props.setting
    return (
        <div className="promotion-container">
            <div className="box">
                <div className="title"><i class="fa-solid fa-fire"></i> KHUYẾN MÃI HOT</div>
                <div className="promotion-box">
                    <div className="promotion-child">
                        <Swiper
                            {...setting}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion1} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">iPhone 14 Pro Max 128GB</div>
                                        <div className="price">26.480.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion2} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">Samsung Galaxy Z Flip5 5G 512GB</div>
                                        <div className="price">24.990.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion3} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">OPPO A58 6GB-128GB</div>
                                        <div className="price">4.690.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion4} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">Laptop Asus TUF Gaming FX506HF-HN017W i5 11400H</div>
                                        <div className="price">17.990.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion5} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">Xiaomi Redmi Note 12 4GB-128GB </div>
                                        <div className="price">4.390.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion6} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">iPhone 14 Pro Max 128GB</div>
                                        <div className="price">30.000.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion7} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">Samsung Galaxy A34 5G</div>
                                        <div className="price">6.990.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion8} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">Laptop MSI Gaming Thin GF63 12VE-454VN i5 12450H</div>
                                        <div className="price">21.490.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion9} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">realme C55 8GB-256GB</div>
                                        <div className="price">5.190.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion10} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">Samsung Galaxy A14 4G</div>
                                        <div className="price">3.890.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-container">
                                    <div className="box-img">
                                        <img src={frame} alt="" className="img-child" />
                                        <img src={promotion11} alt="" className="img-phone" />
                                    </div>
                                    <div className="box-info">
                                        <div className="title-name">iPhone 13 128GB </div>
                                        <div className="price">16.690.000 Đ</div>
                                    </div>
                                    <div className="endow-box">
                                        <img src={endow1} alt="" className="endow-child" />
                                        <img src={endow2} alt="" className="endow-child" />
                                        <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <div className="banner-container">
                <div className="box-img">
                    <img src={salestudent} alt="" className="banner-sale" />
                    <div className="sale-container">
                        <img src={sale1} alt="" className="sale st1" />
                        <img src={sale2} alt="" className="sale st2" />
                        <img src={sale3} alt="" className="sale st3" />
                        <img src={sale4} alt="" className="sale st4" />
                        <div className="sale-bt">
                            <img src={sale5} alt="" className="sale-search" />
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Promotion
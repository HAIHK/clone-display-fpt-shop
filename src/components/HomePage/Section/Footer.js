import "./Footer.scss"
import footer1 from "../../../assets/images/Payment/footer1.png"
import footer2 from "../../../assets/images/Payment/footer2.png"
import payment1 from "../../../assets/images/Payment/payment1.png"
import payment2 from "../../../assets/images/Payment/payment2.png"
import payment3 from "../../../assets/images/Payment/payment3.png"
import payment4 from "../../../assets/images/Payment/payment4.png"
import payment5 from "../../../assets/images/Payment/payment5.png"
import payment6 from "../../../assets/images/Payment/payment6.png"
import payment7 from "../../../assets/images/Payment/payment7.png"
import payment8 from "../../../assets/images/Payment/payment8.png"
import payment9 from "../../../assets/images/Payment/payment9.png"
import payment10 from "../../../assets/images/Payment/payment10.png"
import payment11 from "../../../assets/images/Payment/payment11.png"
import payment12 from "../../../assets/images/Payment/payment12.png"
import payment13 from "../../../assets/images/Payment/payment13.png"
import payment14 from "../../../assets/images/Payment/payment14.png"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-box">
                <div className="box-item">
                    <ul className="item1">
                        <li className="item-child"><a>Giới thiệu về công ty</a></li>
                        <li className="item-child"><a>Chính sách bảo mật</a></li>
                        <li className="item-child"><a>Quy chế hoạt động</a></li>
                        <li className="item-child"><a>Kiểm tra hóa đơn điện tử</a></li>
                        <li className="item-child"><a>Tra cứu thông tin bảo hành</a></li>
                        <li className="item-child"><a>Câu hỏi thường gặp mua hàng</a></li>
                        <li className="item-child"><a>
                            <img src={footer1} alt="" className="img-child1" />
                            <img src={footer2} alt="" className="img-child2" />
                        </a></li>
                    </ul>
                </div>
                <div className="box-item">
                    <ul className="item1">
                        <li className="item-child"><a>Tin tuyển dụng</a></li>
                        <li className="item-child"><a>Tin khuyến mãi</a></li>
                        <li className="item-child"><a>Hướng dẫn mua online</a></li>
                        <li className="item-child"><a>Hướng dẫn mua trả góp</a></li>
                        <li className="item-child"><a>Chính sách trả góp</a></li>
                        <div className="img-icon">
                            <p className="title">Chứng nhận:</p>
                            <img src={payment1} alt="" className="img1" />
                            <img src={payment2} alt="" className="img1" />
                            <img src={payment3} alt="" className="img1" />
                        </div>
                    </ul>

                </div>
                <div className="box-item">
                    <ul className="item1">
                        <li className="item-child"><a>Hệ thống cửa hàng</a></li>
                        <li className="item-child"><a>Chính sách đổi trả</a></li>
                        <li className="item-child"><a>Hệ thống bảo hành</a></li>
                        <li className="item-child"><a>Giới thiệu máy đổi trả</a></li>
                    </ul>
                </div>
                <div className="box-item">
                    <ul className="item4">
                        <li className="item-child">
                            <p className="title">Tư vấn mua hàng (Miễn phí)</p>
                            <a className="phone">1800 6601</a>
                            <span>(Nhánh 1)</span>
                        </li>
                        <li className="item-child">
                            <p className="title">Hỗ trợ kỹ thuật</p>
                            <a className="phone">1800 6601</a>
                            <span>(Nhánh 2)</span>
                        </li>
                        <li className="item-child">
                            <p className="title">Góp ý, khiếu nại (8h00 - 22h00)</p>
                            <a className="phone">1800 6616</a>
                        </li>
                        <li className="item-child">
                            <p className="title">Hỗ trợ thanh toán:</p>
                            <div className="box-payment">
                                <img src={payment4} alt="" className="img-payment" />
                                <img src={payment5} alt="" className="img-payment" />
                                <img src={payment6} alt="" className="img-payment" />
                                <img src={payment7} alt="" className="img-payment" />
                                <img src={payment8} alt="" className="img-payment" />
                                <img src={payment9} alt="" className="img-payment" />
                            </div>
                        </li>

                    </ul>

                </div>
                <div className="box-item">
                    <div className="connect">
                        <p className="title">Kết nối với chúng tôi:</p>
                        <a><img src={payment10} alt="" className="connect-img" /></a>
                        <a><img src={payment11} alt="" className="connect-img" /></a>
                    </div>
                    <div className="website">
                        <p className="title">Website cùng FPT Retail:</p>
                        <p className="connect-web">Cửa hàng uỷ quyền bởi Apple:</p>
                        <img src={payment12} alt="" className="img-web1" />
                        <p className="connect-web">Cửa hàng uỷ quyền bởi Apple:</p>
                        <img src={payment13} alt="" className="img-web2" />
                        <p className="connect-web">Cửa hàng uỷ quyền bởi Apple:</p>
                        <img src={payment14} alt="" className="img-web3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import logo from "../.././assets/images/Logo/logo.png"
import "./Header.scss"
import banner from "../../assets/images/Banner/banner.png"
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="img-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="input-search">
                    <input type="text" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" />
                    <div className="search"><i className="fa-solid fa-magnifying-glass"></i></div>
                </div>
                <div className="action">
                    <div className="action-icon">
                        <i class="fa-solid fa-file-lines"></i>
                        <div>Thông tin hay</div>
                    </div>
                    <div className="action-icon">
                        <i class="fa-solid fa-file-circle-check"></i>
                        <div>Thông tin & tiện ích</div>
                    </div>
                    <div className="action-icon">
                        <i class="fa-solid fa-circle-user"></i>
                        <div>Tài khoản của tôi</div>
                    </div>
                    <div className="action-icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div>Giỏ hàng</div></div>
                </div>
            </div>
            <div className="header-second">
                <div className="item"><i class="fa-solid fa-mobile-screen-button"></i> ĐIỆN THOẠI</div>
                <div className="item"><i class="fa-solid fa-laptop"></i> LAPTOP</div>
                <div className="item"><i class="fa-solid fa-tablet-screen-button"></i> MÁY TÍNH BẢNG</div>
                <div className="item"><i class="fa-brands fa-apple"></i> APPLE</div>
                <div className="item"><i class="fa-solid fa-desktop"></i> PC - LINH KIỆN</div>
                <div className="item"><i class="fa-solid fa-headphones"></i> PHỤ KIỆN</div>
                <div className="item"><i class="fa-solid fa-rotate-right"></i> MÁY CŨ GIÁ RẺ</div>
                <div className="item"><i class="fa-solid fa-house-circle-check"></i> HÀNG GIA DỤNG</div>
                <div className="item"><i class="fa-solid fa-sim-card"></i> SIM & THẺ</div>
                <div className="item"><i class="fa-solid fa-percent"></i> KHUYẾN MÃI</div>
            </div>
            <div className="banner">
                <a href="https://fptshop.com.vn/ctkm/flash-sale">  <img src={banner} alt="" className="banner-img" /> </a>
            </div>
        </div>
    )
}

export default Header
import "./Categori.scss"
import cate1 from "../../../assets/images/Categori/cate1.png"
import cate2 from "../../../assets/images/Categori/cate2.png"
import cate3 from "../../../assets/images/Categori/cate3.png"
import cate4 from "../../../assets/images/Categori/cate4.png"
import cate5 from "../../../assets/images/Categori/cate5.png"
import cate6 from "../../../assets/images/Categori/cate6.png"
import cate7 from "../../../assets/images/Categori/cate7.png"
import cate8 from "../../../assets/images/Categori/cate8.png"
import cate9 from "../../../assets/images/Categori/cate9.png"
import cate10 from "../../../assets/images/Categori/cate10.png"
import cate11 from "../../../assets/images/Categori/cate11.png"
import cate12 from "../../../assets/images/Categori/cate12.png"
import banner from "../../../assets/images/Banner/banner2.png"

const Categori = () => {
    return (
        <div className="categori-container">
            <div className="categori-box">
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate1} alt="" />
                    </div>
                    <span className="name-categori">Điện Thoại</span>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate2} alt="" />
                    </div>
                    <div className="name-categori">Laptop</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate3} alt="" />
                    </div>
                    <div className="name-categori">PC</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate4} alt="" />
                    </div>
                    <div className="name-categori">Máy tính bảng</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate5} alt="" />
                    </div>
                    <div className="name-categori">Thiết bị thông minh</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate6} alt="" />
                    </div>
                    <div className="name-categori">Gia dụng</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate7} alt="" />
                    </div>
                    <div className="name-categori">Apple</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate8} alt="" />
                    </div>
                    <div className="name-categori">Sam sung</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate9} alt="" />
                    </div>
                    <div className="name-categori">Đồng hồ thông minh</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate10} alt="" />
                    </div>
                    <div className="name-categori">Phụ kiện</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate11} alt="" />
                    </div>
                    <div className="name-categori">Màn hình</div>
                </div>
                <div className="categori-child">
                    <div className="box-categori">
                        <img src={cate12} alt="" />
                    </div>
                    <div className="name-categori">Máy cũ</div>
                </div>
            </div>
            <div className="banner-container">
                <div className="banner">
                    <a href="https://fptshop.com.vn/ctkm/laptop-gaming">  <img src={banner} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Categori
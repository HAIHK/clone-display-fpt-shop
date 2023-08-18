import "./Laptop.scss"
import frame from "../../../assets/images/Promotion/frame.png"
import endow1 from "../../../assets/images/Promotion/endow1.jpg"
import endow2 from "../../../assets/images/Promotion/endow2.png"
import banner from "../../../assets/images/Laptop/banner.png"
import laptop1 from "../../../assets/images/Laptop/laptop1.png"
import laptop2 from "../../../assets/images/Laptop/laptop2.jpg"
import laptop3 from "../../../assets/images/Laptop/laptop3.jpg"
import laptop4 from "../../../assets/images/Laptop/laptop4.jpg"
import laptop5 from "../../../assets/images/Laptop/laptop5.jpg"
import laptop6 from "../../../assets/images/Laptop/laptop6.jpg"
import laptop7 from "../../../assets/images/Laptop/laptop7.jpg"
import laptop8 from "../../../assets/images/Laptop/laptop8.jpg"

const Laptop = () => {
    return (
        <div className="laptop-container">
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            <div className="laptop-box">
                <div className="box">
                    <div className="title">
                        <span className="title-text">
                            Lap top bán chạy
                        </span>
                        <span className="search-all">Xem tất cả</span>
                    </div>
                    <div className="laptop">
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop1} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">MacBook Air 13 inch M1 2020 8CPU 7GPU 8GB/256GB</div>
                                <div className="price">12.490.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 13.3 inch</div>
                                    <div><i class="fa-solid fa-microchip"></i> M1</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 8 GB</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 256GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> Apple M1</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 1.29 kg</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>
                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop2} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Laptop Asus Vivobook E1404FA-NK186W R5-7520U</div>
                                <div className="price">10.990.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 14.0 inchAMD </div>
                                    <div><i class="fa-solid fa-microchip"></i> Ryzen 5</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 16 GB</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 512 GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> Radeon Graphics</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 1300 g</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop3} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Laptop Acer Swift 3 SF314-43-R4X3 R5 5500U (NX.AB1SV.004)</div>
                                <div className="price">4.990.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 14.0 inchAMD </div>
                                    <div><i class="fa-solid fa-microchip"></i> Ryzen 5</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 16 GB</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 512 GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> Radeon Graphics</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 1.19 kg</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop4} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Laptop Asus Gaming TUF FA506ICB-HN355W R5 </div>
                                <div className="price">8.790.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 15.6 inch</div>
                                    <div><i class="fa-solid fa-microchip"></i> Ryzen 5</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 8 GB</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 512 GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> NVIDIA GeForce RTX 3050 4GB</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 2.3 kg</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop5} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Laptop HP Gaming Victus 16-e1107AX R5-6600H</div>
                                <div className="price">4.290.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 16.1 inch</div>
                                    <div><i class="fa-solid fa-microchip"></i> Ryzen 5</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 8 GB (1 thanh 8 GB)</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 512 GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> NVIDIA GeForce RTX 3050 4GB</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 2.4 kg</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop6} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">HP 245 G9 R5 5625U (6L1N8PA)</div>
                                <div className="price">4.290.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 14.0 inch</div>
                                    <div><i class="fa-solid fa-microchip"></i> Ryzen 5</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 8 GB (1 thanh 8 GB)</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 256GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> AMD Radeon Graphics</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 1.47 kg</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop7} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Lenovo Gaming Legion 5 15IAH7H i5-12500H (82RB0048VN)</div>
                                <div className="price">16.690.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 15.6 inch</div>
                                    <div><i class="fa-solid fa-microchip"></i> Core i5</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 16 GB (2 thanh 8 GB)</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 512 GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> NVIDIA GeForce RTX 3060 6GB</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 2.35 kg</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>

                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={laptop8} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">MSI Gaming GF63 Thin 11SC-664VN i5-11400H</div>
                                <div className="price">14.990.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <div><i class="fa-solid fa-laptop"></i> 15.6 inch</div>
                                    <div><i class="fa-solid fa-microchip"></i> Core i5</div>
                                    <div><i class="fa-solid fa-clipboard"></i> 8 GB</div>
                                    <div><i class="fa-solid fa-bookmark"></i> SSD 512 GB</div>
                                    <div><i class="fa-solid fa-sim-card"></i> NVIDIA GeForce GTX 1650 4GB</div>
                                    <div><i class="fa-solid fa-weight-hanging"></i> 1.86 kg</div>
                                </div>
                                <img src={endow1} alt="" className="endow-child" />
                                <img src={endow2} alt="" className="endow-child" />
                                <div className="endow-text">Giảm 200.000đ ZaloPay-QR</div>
                            </div>
                            <div className="buy-compare">
                                <div className="buy">Mua ngay</div>
                                <div className="compare">So sánh</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laptop
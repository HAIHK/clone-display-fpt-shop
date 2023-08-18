import "./Table.scss"
import frame from "../../../assets/images/Promotion/frame.png"
import endow1 from "../../../assets/images/Promotion/endow1.jpg"
import endow2 from "../../../assets/images/Promotion/endow2.png"
import banner from "../../../assets/images/Table/banner.png"
import table1 from "../../../assets/images/Table/table1.jpg"
import table2 from "../../../assets/images/Table/table2.jpg"
import table3 from "../../../assets/images/Table/table3.jpg"
import table4 from "../../../assets/images/Table/table4.jpg"

const Table = () => {
    return (
        <div className="table-container">
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            <div className="table-box">
                <div className="box">
                    <div className="title">
                        <span className="title-text">
                            Lap top bán chạy
                        </span>
                        <span className="search-all">Xem tất cả</span>
                    </div>
                    <div className="table-item">
                        <div className="box-container">
                            <div className="box-img">
                                <div className="img-child"></div>
                                <img src={table1} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">iPad Pro 11 2022 M2 WiFi 128GB</div>
                                <div className="price">12.490.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <span><i class="fa-solid fa-microchip"></i> Apple M2</span>
                                    <span><i class="fa-solid fa-mobile-screen-button"></i> Chính: 11.0 inch</span>
                                    <span>
                                        <span><i class="fa-solid fa-clipboard"></i> 8 GB</span>
                                        <span><i class="fa-solid fa-bookmark"></i> 128 GB</span>
                                    </span>
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
                                <img src={table2} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Samsung Galaxy Tab S6 Lite 2022</div>
                                <div className="price">10.990.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <span><i class="fa-solid fa-microchip"></i> Snapdragon 720G</span>
                                    <span><i class="fa-solid fa-mobile-screen-button"></i> 10.4 inch</span>
                                    <span>
                                        <span><i class="fa-solid fa-clipboard"></i> 4 GB</span>
                                        <span><i class="fa-solid fa-bookmark"></i> 64 GB</span>
                                    </span>
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
                                <img src={table3} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Xiaomi Redmi Pad 3GB-64GB</div>
                                <div className="price">4.990.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <span><i class="fa-solid fa-microchip"></i> MediaTek Helio G99</span>
                                    <span><i class="fa-solid fa-mobile-screen-button"></i> 10.61 inch</span>
                                    <span>
                                        <span><i class="fa-solid fa-clipboard"></i> 3 GB</span>
                                        <span><i class="fa-solid fa-bookmark"></i> 64 GB</span>
                                    </span>
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
                                <img src={table4} alt="" className="img-laptop" />
                            </div>
                            <div className="box-info">
                                <div className="title-name">Lenovo Tab M10 64GB (Gen2)</div>
                                <div className="price">4.990.000 Đ</div>
                            </div>
                            <div className="endow-box">
                                <div className="technology">
                                    <span><i class="fa-solid fa-microchip"></i> MediaTek Helio P22 (MT6762R)</span>
                                    <span><i class="fa-solid fa-mobile-screen-button"></i> 10.1 inch</span>
                                    <span>
                                        <span><i class="fa-solid fa-clipboard"></i> 4 GB</span>
                                        <span><i class="fa-solid fa-bookmark"></i> 64 GB</span>
                                    </span>
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

export default Table
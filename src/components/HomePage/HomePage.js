import "../HomePage/HomePage.scss"
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import BoxBannner from "./Section/BoxBanner"
import Categori from "./Section/Categori"
import Promotion from "./Section/Promotion"
import FeaturedPhone from "./Section/FeaturedPhone"
import Laptop from "./Section/Laptop"
import Table from "./Section/Table"
import Container from "./Houseware/Container";
import Suggest from "./Houseware/Suggest";
import PaymentOnline from "./Houseware/PaymentOnline";
import Footer from "./Section/Footer";

const HomePage = () => {
    let settings = {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: true,
        modules: [Navigation, Autoplay],
    }

    let Payment = {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: true,
        modules: [Navigation, Autoplay],
    }

    let setting = {
        slidesPerView: 4,
        // spaceBetween={0}
        navigation: true,
        modules: [Navigation]
    }

    return (
        <>
            <BoxBannner settings={settings} />
            <Categori />
            <Promotion setting={setting} />
            <FeaturedPhone />
            <Laptop />
            <Table />
            <Container />
            <Suggest />
            <PaymentOnline settings={Payment} />
            <Footer />
        </>
    )
}

export default HomePage
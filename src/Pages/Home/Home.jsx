import Banner from "../../components/Banner/Banner";
import bannerImage from '../../assets/hero-image.webp'
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="w-full">
            <Banner></Banner>
            <div className="my-16 lg:my-24">
                <img className="w-10/12 mx-auto" src={bannerImage} alt="" />
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Home;
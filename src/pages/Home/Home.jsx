import AllEstates from "../../components/AllEstates/AllEstates";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    // const allEstateData = useLoaderData();

    // console.log(allEstateData)

    return (
        <div>
            {/* <h1>Home</h1> */}
            <Banner></Banner>
            <AllEstates
            // allEstateData={allEstateData}
            ></AllEstates>
            <Footer></Footer>


            {/* <SingleEstate></SingleEstate> */}
        </div>
    );
};

export default Home;
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Writing from "../../components/Writing";
import Footer from "../../components/Footer";
import Review from "../../components/Review";

// type Props = {};

const Home = () => {
  return (
    <div className="mx-14">
      <Navbar />
      <Hero />
      <Writing />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;

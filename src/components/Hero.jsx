import Slider from "react-slick";
import silver from "../assets/jewellery.jpg";
import gold from "../assets/gold.jpg";
import rajwadi from "../assets/rajwadi.jpg";
import woman from "../assets/woman.png";
import jewellery from "../assets/jewellery.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={silver}
            alt="Diamond"
            className="w-full h-screen object-cover"
          />
          <Content title="Silver Jewellery" />
        </div>
        <div className="relative">
          <img
            src={gold}
            alt="Kundan"
            className="w-full h-screen object-cover"
          />
          <Content title="Gold Jewellery" />
        </div>
        <div className="relative">
          <img
            src={woman}
            alt="Temple"
            className="w-full h-screen object-cover"
          />
          <Content title="Rajwadi Jewellery" />
        </div>
        <div className="relative">
          <img
            src={jewellery}
            alt="Temple"
            className="w-full h-screen object-cover"
          />
          <Content title="Rajwadi Jewellery" />
        </div>
        <div className="relative">
          <img
            src={rajwadi}
            alt="Temple"
            className="w-full h-screen object-cover"
          />
          <Content title="Rajwadi Jewellery" />
        </div>
      </Slider>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Content = ({ title }) => (
  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
  <div className="flex items-center gap-4 text-white">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">{title}</h1>
    <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all rounded-none text-sm sm:text-base">
      EXPLORE NOW
    </button>
  </div>
</div>

);

export default Hero;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brand() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="w-[600px] h-[400px]">
          <img src="/img/BrandU/Login.png" width={600} height={400} />
        </div>
        <div className="w-[600px] h-[400px]">
          <img src="/img/BrandU/Main.png" width={600} height={400} />
        </div>
        <div>
          <img src="/img/BrandU/Payment.png" width={600} height={400} />
        </div>
        <div>
          <img src="/img/BrandU/Profile.png" width={600} height={400} />
        </div>
      </Slider>
    </div>
  );
}
export default Brand;

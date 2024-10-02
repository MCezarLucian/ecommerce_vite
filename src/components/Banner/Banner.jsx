import BannerImg from "../../assets/banner.png";
import { GrSecure } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-950 dark:text-white min-h-[600px] flex justify-center items-center
    py-12 sm:py-0"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        gap-6 items-center"
        >
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full
            mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
            object-cover"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center
          gap-6 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sale up to 50% Off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nobis eum, reiciendis temporibus mollitia repudiandae soluta
              voluptas ipsa velit iste!
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality Products</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <CiDeliveryTruck
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-orange-100 dark:bg-orange-400"
                />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <CiMoneyCheck1
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-green-100 dark:bg-green-400"
                />
                <p>Easy Payments method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiSolidOffer
                  className="text-4xl h-12 w-12 shadow-sm
                p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"
                />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

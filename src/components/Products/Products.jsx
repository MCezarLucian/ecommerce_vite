import { FaStar } from "react-icons/fa6";
import Image1 from "../../assets/image1.png";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: Image1,
      title: "Women Ethnic",
      rating: 5.0,
      author: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Image1,
      title: "Women western",
      rating: 4.5,
      author: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Image1,
      title: "Goggles",
      rating: 4.7,
      author: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Image1,
      title: "Printed T-Shirt",
      rating: 4.4,
      author: "Yellow",
      aosDelay: "600",
    },
  ];

  return (
    <div className="pt-12 pb-12 bg-gray-100 dark:bg-gray-950 dark:text-white">
      <div className="container flex flex-col">
        <div
          className="text-center mb-10 max-w-[600px]
        mx-auto"
        >
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-secondary"
          >
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, nostrum.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
        lg:grid-cols-4 place-items-center gap-5"
        >
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px]
                        object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="text-center mt-10 cursor-pointer
            bg-primary text-white py-1 px-4 rounded-md
            hover:bg-white hover:text-primary hover:border
            hover:border-primary"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

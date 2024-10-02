import Slider from "react-slick";

const Testimonials = () => {
  const TestimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad harum excepturi deserunt libero quod eum labore deleniti dolorum voluptate nihil?",
      img: "https://www.picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Satya Nadella",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad harum excepturi deserunt libero quod eum labore deleniti dolorum voluptate nihil?",
      img: "https://www.picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Virat Kohli",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad harum excepturi deserunt libero quod eum labore deleniti dolorum voluptate nihil?",
      img: "https://www.picsum.photos/103/103",
    },
    {
      id: 4,
      name: "Guta Florin",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad harum excepturi deserunt libero quod eum labore deleniti dolorum voluptate nihil?",
      img: "https://www.picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad harum excepturi deserunt libero quod eum labore deleniti dolorum voluptate nihil?",
      img: "https://www.picsum.photos/105/105",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-950 dark:text-white">
      <div className="container">
        <div className="text-left mb-10">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-secondary"
          >
            What our customers say
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testiomonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
            rerum!
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  className="flex flex-col gap-4 shadow-lg
              py-8 px-6 mx-4 rounded-xl dark:bg-gray-700
              bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400 dark:text-gray-400">
                        {data.text}
                      </p>
                      <h1
                        className="text-l font-bold
                    text-black/80 dark:text-secondary"
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="text-black/20 text-9xl font-serif
                  absolute top-0 right-0"
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

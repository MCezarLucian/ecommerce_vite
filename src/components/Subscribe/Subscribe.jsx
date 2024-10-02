const Subscribe = () => {
  return (
    <div className=" w-full bg-primary text-white">
      <div className="container px-16 py-10 backdrop-blur-sm ">
        <div
          data-aos="zoom-in"
          className="space-y-6 max-w-xl mx-auto flex flex-col items-center"
        >
          <h1
            className="text-2xl !text-center
      sm:text-4xl font-semibold flex flex-col gap-5"
          >
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="max-w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

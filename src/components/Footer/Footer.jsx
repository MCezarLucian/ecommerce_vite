import footerLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const Footer = () => {
  const FooterLinks = [
    { title: "Home" },
    { title: "About" },
    { title: "Contact" },
    { title: "Blog" },
  ];

  return (
    <div className="bg-primary text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          <div className="py-8 px-4">
            <h1
              className="sm:text-2xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3"
            >
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Guz Shop
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, dignissimos.
            </p>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3
          col-span-2 md:pl-10"
          >
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-2xl text-xl font-bold
                    sm:text-left text-justify mb-3"
                >
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-gray-500
                      hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-2xl text-xl font-bold
                    sm:text-left text-justify mb-3"
                >
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-gray-500
                      hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="ml-6 mt-4">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+40 0759384028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

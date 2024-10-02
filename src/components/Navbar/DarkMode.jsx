import { useEffect, useState } from "react";
import { RiToggleLine } from "react-icons/ri";
import { RiToggleFill } from "react-icons/ri";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [element.classList, theme]);

  return (
    <div className="relative">
      {theme !== "dark" ? (
        <RiToggleLine
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-12 h-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
      transition-all duration-300"
        />
      ) : (
        <RiToggleFill
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-12 h-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
      transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkMode;

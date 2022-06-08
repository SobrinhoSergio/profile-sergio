import { IoMdRocket } from "react-icons/io";
import { ScrollUp } from "./styles";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const ScrollUpSpan: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <ScrollUp>
      <Link to="home" spy={true} smooth={true} duration={300}>
        {" "}
        {showTopBtn && <IoMdRocket className="icon-top" />}{" "}
      </Link>
    </ScrollUp>
  );
};

export default ScrollUpSpan;

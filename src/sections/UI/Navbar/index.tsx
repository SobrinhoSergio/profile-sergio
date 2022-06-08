import React, { useState } from "react";

import * as S from "./styles";

import { Link } from "react-scroll";

const MenuLinks: React.FC = () => {
  const linksMenu = [
    {
      name: "Home",
      link: "home"
    },
    {
      name: "About",
      link: "about"
    },
    {
      name: "skills",
      link: "skills"
    },
    {
      name: "Appliance",
      link: "appliance"
    },
    {
      name: "Contact",
      link: "contact"
    }
  ];

  return (
    <S.Navbar className="navbar">
      <S.NavMenu>
        {linksMenu.map((value, index) => {
          return (
            <S.NavItem key={index}>
              <Link
                to={value.link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
              >
                {value.name}
              </Link>
            </S.NavItem>
          );
        })}
      </S.NavMenu>
    </S.Navbar>
  );
};

export default MenuLinks;

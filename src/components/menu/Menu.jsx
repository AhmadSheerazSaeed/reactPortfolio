import React, { useState } from "react";
import menuCSS from "./menu.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";

import { MdOutlineContacts } from "react-icons/md";

function Menu() {
  const [hoveredIconName, setHoveredIconName] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIconName(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIconName(null);
  };

  return (
    <div className={menuCSS.linksWrapper}>
      <Link
        to="/"
        onMouseEnter={() => {
          handleIconHover("HOME");
        }}
        onMouseLeave={handleIconLeave}
      >
        <AiOutlineHome className={menuCSS.homeIcon} />
      </Link>

      <Link
        to="/projects"
        onMouseEnter={() => {
          handleIconHover("PROJECTS");
        }}
        onMouseLeave={handleIconLeave}
      >
        <AiOutlineProject className={menuCSS.projectIcon} />
      </Link>

      <Link
        to="/contact"
        onMouseEnter={() => {
          handleIconHover("CONTACT");
        }}
        onMouseLeave={handleIconLeave}
      >
        <MdOutlineContacts className={menuCSS.contactIcon} />
      </Link>

      <Link
        to="/about"
        onMouseEnter={() => {
          handleIconHover("ABOUT");
        }}
        onMouseLeave={handleIconLeave}
      >
        <AiOutlineUser className={menuCSS.aboutIcon} />
      </Link>

      <AnimatePresence>
        {hoveredIconName && (
          <motion.div
            key="modal"
            className={menuCSS.iconText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {hoveredIconName}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;

"use client";
import SidePanelProfile from "./side-panel-profile";
import SidePanelNavigation from "./side-panel-navigation";
import SidePanelSignout from "./side-panel-signout";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";

export default function SidePanel() {
  const [menuVisible, setMenuVisible] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setMenuVisible(false));
  return (
    <>
      <div className="bg-card rounded-xl lg:w-[300px] h-full lg:flex flex-col justify-between hidden outline outline-1 outline-card-foreground">
        <SidePanelProfile />
        <SidePanelNavigation />
        <SidePanelSignout />
      </div>
      <div ref={ref} className="absolute -left-1">
        <div
          className={
            menuVisible
              ? "hidden"
              : "" +
                " lg:hidden bg-card w-[50px] h-[50px] outline outline-1 outline-card-foreground rounded-xl flex justify-center items-center absolute top-24 -left-3"
          }
        >
          <Hamburger toggled={menuVisible} size={20} toggle={setMenuVisible} />
        </div>
        {menuVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-xl w-[300px] h-fit flex flex-col justify-between fade-in-100 outline outline-1 fixed left-0 top-0 m-4 bottom-0"
          >
            <Hamburger
              toggled={menuVisible}
              size={20}
              toggle={setMenuVisible}
            />
            <SidePanelProfile />
            <SidePanelNavigation />
            <SidePanelSignout />
          </motion.div>
        )}
      </div>
    </>
  );
}

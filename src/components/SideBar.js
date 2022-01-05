import React from "react";
import { FaFire, FaPoo, FaDiscord } from "react-icons/fa";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 w-16 h-screen bg-sidebar m-0 flex flex-col  shadow-lg pt-1">
      <DiscordIcon text={"tooltip"} />
      <SideBarIcon text={"tooltip"} icon={<FaFire size={28} />} />
      <SideBarIcon text={"tooltip"} icon={<BsPlus size={32} />} />
      <SideBarIcon text={"tooltip"} icon={<BsFillLightningFill size={20} />} />
      <SideBarIcon text={"tooltip"} icon={<FaPoo size={20} />} />
    </div>
  );
}

export default SideBar;

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-text group-hover:scale-100">{text}</span>
  </div>
);

const DiscordIcon = ({ icon, text }) => (
  <div className="sidebar-icon rounded-xl bg-primary cursor-auto group">
    <FaDiscord size={28} />
    <span className="sidebar-text group-hover:scale-100">{text}</span>
  </div>
);

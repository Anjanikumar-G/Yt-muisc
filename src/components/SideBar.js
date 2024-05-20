import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faMusic,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

let SideBar = () => {
  return (
    <div
      className="p-5 shadow-lg w-[240px] h-[100%]  bg-gray-100 border border-gray-200"
      style={{ background: "black", color: "white" }}
    >
      <div className="p-6">
        <Link to="/release">
          <h1 className="font-bold pb-4 hover:underline">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </h1>
        </Link>
        <Link to="/topPlaylist">
          <h1 className="font-bold pb-4 hover:underline">
            <FontAwesomeIcon icon={faCompass} className="mr-2" /> Explore
          </h1>
        </Link>
        <Link to="/podcasts">
          <h1 className="font-bold pb-4 hover:underline">
            <FontAwesomeIcon icon={faMusic} className="mr-2" /> Library
          </h1>
        </Link>
        <Link to="/subscription">
          <h1 className="font-bold pb-4 hover:underline">
            <FontAwesomeIcon icon={faArrowUp} className="mr-2" /> Upgrade
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

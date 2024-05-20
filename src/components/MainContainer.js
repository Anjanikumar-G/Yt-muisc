import React, { useEffect } from "react";
import SongContainer from "./SongContainer";
import { useSelector } from "react-redux";
import Login from "./Login";
import SideBar from "./SideBar";

const MainContainer = () => {
  return (
    <div>
      <SongContainer />
    </div>
  );
};

export default MainContainer;

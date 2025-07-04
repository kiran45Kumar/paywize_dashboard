import React from "react";
import RightSidebar from "../Components/RightSidePanel";
import MainDashboard from "../Components/MainDashboard";
import LeftSideBar from "../Components/LeftSideBar";

function Homepage() {
  return (
    <>
      <div class="grid grid-cols-[1fr_2fr_1fr] gap-2">
        <div class="p-8 h-screen border-r-1 border-grey-100"><LeftSideBar/></div>
        <div class="p-8 h-screen"><MainDashboard/></div>
        <div class="p-8 h-screen border-l-1 border-grey-100"><RightSidebar/></div>
      </div>
    </>
  );
}

export default Homepage;

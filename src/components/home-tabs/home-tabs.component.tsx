import React, { useState } from "react";
import "./home-tabs.styles.scss";
import Tab from "./tab.component";

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState("new");

  const renderTab = () => {
    switch (activeTab) {
      case "new":
        return <div>new</div>;
      case "popular":
        return <div>popular</div>;
      case "upcoming":
        return <div>upcoming</div>;
      default:
        break;
    }
  };

  return (
    <>
      <div className="home-tabs">
        <ul>
          <Tab
            name="New"
            isActive={activeTab === "new"}
            onClickHandler={() => setActiveTab("new")}
          />
          <Tab
            name="Popular"
            isActive={activeTab === "popular"}
            onClickHandler={() => setActiveTab("popular")}
          />
          <Tab
            name="Upcoming"
            isActive={activeTab === "upcoming"}
            onClickHandler={() => setActiveTab("upcoming")}
          />
        </ul>
      </div>
      <div className="tab-content">{renderTab()}</div>
    </>
  );
};

export default HomeTabs;

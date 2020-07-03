import React, { useState } from "react";
import "./styles.scss";
import { ITabsProps } from "./types";
import Tab from "./Tab";

const Tabs = ({ tabs }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].content);

  return (
    <div className="tabs-container">
      <ul className="tabs">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            isActive={tab.name === activeTab}
            name={tab.name}
            onClickHandler={() => {
              setActiveTab(tab.name);
              setActiveTabContent(tab.content);
            }}
          />
        ))}
      </ul>
      <div className="tab-content">{activeTabContent}</div>
    </div>
  );
};

export default Tabs;

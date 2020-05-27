import React from "react";
import Tabs from "../../components/tabs/tabs.component";
import Slider from "../../components/slider/slider.component";
import { tabsData, slides } from "../../data/dump-data";

const HomePage = () => {
  return (
    <main className="homepage">
      <Slider interval={3000} slides={slides} />
      <Tabs tabs={tabsData} />
    </main>
  );
};

export default HomePage;

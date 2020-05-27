import React from "react";
import Tabs from "../../components/tabs/tabs.component";
import Slider from "../../components/slider/slider.component";

const HomePage = () => {
  const tabsData = [
    {
      name: "new",
      content: <div>new</div>,
    },
    {
      name: "popular",
      content: <div>popular</div>,
    },
    {
      name: "upcoming",
      content: <div>upcoming</div>,
    },
  ];

  return (
    <main className="homepage">
      <Slider />
      <Tabs tabs={tabsData} />
    </main>
  );
};

export default HomePage;

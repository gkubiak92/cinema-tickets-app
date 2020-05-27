import React from "react";
import Tabs from "../../components/tabs/tabs.component";

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
      <h1>HOME</h1>
      <Tabs tabs={tabsData} />
    </main>
  );
};

export default HomePage;

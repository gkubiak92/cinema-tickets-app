import React from "react";
import Tabs from "../../components/tabs/tabs.component";
import Slider from "../../components/slider/slider.component";
import { slides, movies } from "../../data/dump-data";
import MoviesList from "../../components/movies-list/movies-list.component";

const HomePage = () => {
  const tabsData = [
    {
      name: "new",
      content: <MoviesList movies={movies} />,
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
      <Slider interval={3000} slides={slides} />
      <Tabs tabs={tabsData} />
    </main>
  );
};

export default HomePage;

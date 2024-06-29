import React from "react";
import Categories from "./singlePage/university/Categories";
import Partners from "./singlePage/university/Partners";
import Popular from "./singlePage/university/Popular";
import Service from "./Service";
import DownloadApp from "./DownloadApp";

export default function Main() {
  return (
    <div className="">
      <Categories />
      <Service />
      <Partners />
      <Popular />
      <DownloadApp />
    </div>
  );
}

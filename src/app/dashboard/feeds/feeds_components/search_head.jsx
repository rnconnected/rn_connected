import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Search_feeds = () => {
  return (
    <div className="topnavCont">
      <div className="inputArea">
        <div className="search_icon">
          <Icon icon="ic:outline-search" />
        </div>
        <input className="searchInput" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search_feeds;

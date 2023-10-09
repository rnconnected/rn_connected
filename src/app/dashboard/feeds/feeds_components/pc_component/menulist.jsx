import React from "react";
import { Icon } from "@iconify/react";
import "./menulist.css";

const Menulist = ({ postMenuActive }) => {
  return (
    <div className={`menulist ${postMenuActive ? "active" : ""}`}>
      <div className="save_post">
        <Icon icon="ep:collection-tag" />
        <span>Save Post</span>
      </div>
      <div className="remove_connect">
        <Icon icon="material-symbols:cancel-outline" />
        <span>Remove Connect</span>
      </div>
      <div className="mute">
        <Icon icon="octicon:mute-24" />
        <span>Mute</span>
      </div>
      <div className="direct_message">
        <Icon icon="uiw:message" />
        <span>Direct Message</span>
      </div>
    </div>
  );
};

export default Menulist;

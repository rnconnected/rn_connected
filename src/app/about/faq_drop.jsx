import React from "react";
import { Collapse } from "react-collapse";
import { Icon } from "@iconify/react/dist/iconify.js";

const Faq_drop = ({ open, toggle, title, desc }) => {
  return (
    <div className="faq-item">
      <div className={"faq-item-header"} onClick={toggle}>
        <p className={"faq_item_title" + (open ? " addbold" : "")}>{title}</p>
        <div className="faq-item-icon">
          {open ? (
            <Icon icon="tdesign:minus-circle" />
          ) : (
            <Icon icon="bi:plus-circle" />
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="faq-item-body">{desc}</div>
      </Collapse>
      <hr className="faq-hr-line" />
    </div>
  );
};

export default Faq_drop;

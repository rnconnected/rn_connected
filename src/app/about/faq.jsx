import React, { useState } from "react";
import Faq_drop from "./faq_drop";
import "./faq.css";

export default function Faq() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const faq_data = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi.  Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. ",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi.  Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. ",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi.  Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. ",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi.  Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. ",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi.  Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. ",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi.  Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. ",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi.  Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. Lorem ipsum dolor sit amet consectetur. Consequat mattis porttitor eget ullamcorper nec mi. Vitae sit nisl feugiat turpis sagittis adipiscing metus. Erat mauris pellentesque in eget feugiat egestas leo. Dis elementum id vitae nibh sem. ",
    },
  ];

  return (
    <div className="faq_cont">
      <section className="faq">
        <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="faq_items">
          {faq_data.map((data, index) => {
            return (
              <Faq_drop
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
          <div className="btn_cont">
            <button className="btn-load-more">View More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

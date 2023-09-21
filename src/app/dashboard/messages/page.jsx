"use client";
import React, { useState, useEffect } from "react";
import "src/app/dashboard/messages/message.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Contacts from "./contacts.json";
import Image from "next/image";
import messages from "./chatdemo.json";
import LeftNav from "../components/leftNav";

const Message = () => {
  const [istext, setbtn] = useState("");

  return (
    <>
      <div className="pageCont">
        <div className="leftbar">
          <LeftNav />
        </div>
        <section className="messaging_section">
          <section className="msg_main">
            {/* this is the search section */}
            <section className="contact_section">
              {/* this is the search contact bar */}
              <div className="search_contact_section">
                <Icon icon="ri:sound-module-line" />
                <input
                  type="search"
                  className="search_contact"
                  placeholder="Search messages"
                />
                <span>
                  <Icon icon="ic:baseline-search" />
                </span>
              </div>
              {/* end of the search contact bar */}

              {/* this is the  contact list */}
              <div className="contact_list">
                {Contacts.map((contact, index) => {
                  return (
                    <div className="friends" key={index}>
                      <div className="friend_dp">
                        <Image
                          src={contact.dp}
                          height={100}
                          width={100}
                          alt="dp"
                          className="friend_img"
                        />
                      </div>
                      <div className="friend_txt">
                        <div className="name_date">
                          <div className="friend_name">{contact.name}</div>
                          <div className="friend_date">{contact.date}</div>
                        </div>
                        <div className="last_msg">{contact.last_msg}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* end of the search contact bar */}

            {/* the main message section */}
            <section className="message_section">
              <div className="msg_sec_bg"></div>

              {/* this is the chat section */}
              <div className="chat_section">
                {/* this is the chat header */}
                <div className="chat_header">
                  {/* this is the chat header left */}
                  <div id="chat_header_L">
                    <div className="chat_friend_dp">
                      <Image
                        src={"/RNlogo/logowhite.png"}
                        height={100}
                        width={100}
                        alt="dp"
                        className="friend_img"
                      />
                    </div>
                    {/* the chat name and status section */}
                    <div className="chatname_status">
                      <div className="chat_name">Samson festus</div>
                      <div className="chat_status">
                        <span>Online</span>
                        <Icon
                          icon="icon-park-outline:dot"
                          className="status_dot"
                        />
                      </div>
                    </div>
                  </div>
                  {/* this the end if the chat header left */}

                  {/* this the chat header right */}
                  <div id="chat_header_R">
                    <span className="chat_icon">
                      <Icon icon="ic:baseline-search" />
                    </span>
                    <span className="chat_icon">
                      <Icon icon="mingcute:phone-line" />
                    </span>
                    <span className="chat_icon">
                      <Icon icon="uil:video" />
                    </span>
                    <span className="chat_icon">
                      <Icon icon="bi:three-dots-vertical" />
                    </span>
                  </div>
                  {/* this is the end of the chat header right */}
                </div>
                {/* end of the chat header */}

                {/* this is the chat body section */}
                <section className="chat_body">
                  {messages.map((message, index) => {
                    return (
                      <div key={index} className={`message ${message.sender}`}>
                        <div className="message-box">{message.message}</div>
                      </div>
                    );
                  })}
                </section>
                {/* this is the end of the chat body section */}

                {/* this is the chat input area */}
                <section className="chat_input_area">
                  <span className="chat_icon">
                    <Icon icon="vaadin:smiley-o" />
                  </span>
                  <span className="chat_icon">
                    <Icon icon="heroicons:paper-clip" />
                  </span>
                  <textarea
                    type="text"
                    rows="1"
                    cols={""}
                    placeholder="Type a message"
                    value={istext}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                      setbtn(e.target.value);
                    }}
                  />
                  <span>
                    {istext == "" ? (
                      <span className="chat_icon">
                        <Icon icon="typcn:microphone-outline" />
                      </span>
                    ) : (
                      <span className="chat_icon">
                        <Icon icon="ic:round-send" />
                      </span>
                    )}
                  </span>
                </section>
                {/* this is the end of the chat input area */}
              </div>
            </section>
            {/* end of the main message section */}
          </section>
        </section>
      </div>
    </>
  );
};

export default Message;

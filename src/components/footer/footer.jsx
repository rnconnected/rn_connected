"use client";
import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="cont">
          <div className="section1">
            <div className="footerLogo">
              <Image src="/RNlogo/logo1.png" alt="" width={500} height={500} />
            </div>
            <div className="footerText">
              Lorem ipsum dor sit amet consectetur. Lorem ipsum dolor sit amet.
            </div>
          </div>

          <div className="div">
            <div className="section2">
              <h4>Contact</h4>
              <div className="ContactList">
                <li>
                  <span className="icon">
                    <Icon icon="pajamas:location" />
                  </span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li>
                  <span className="icon">
                    <Icon icon="ic:sharp-phone" />
                  </span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li>
                  <span className="icon">
                    <Icon icon="material-symbols:mail-outline" />
                  </span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
              </div>
            </div>

            <div className="section3">
              <h4>Follow Us</h4>
              <div className="followList">
                <Link href="https://web.facebook.com/?_rdc=1&_rdr">
                  <div className="follow">
                    <span className="icon">
                      <Image
                        src="/icons/facebook.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>Facebook</span>
                  </div>
                </Link>
                <Link href="https://twitter.com/home">
                  <div className="follow">
                    <span className="icon">
                      <Image
                        src="/icons/twitter.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>Twitter</span>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/">
                  <div className="follow">
                    <span className="icon">
                      <Image
                        src="/icons/instagram.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>Instagram</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="section4">
              <div className="subscribe">
                <h4>Subscribe to our newsletter</h4>
                <div className="search_space">
                  <input type="text" placeholder="Enter E-mail" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrightSection">
          <div className="before"></div>
          <h4 className="copyright">Copyright@2023</h4>
          <div className="after"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

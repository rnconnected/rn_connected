import React, { useState, useEffect } from "react";
import "src/app/dashboard/feeds/feeds_components/rightNav.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import appwriteService from "@/appwrite/appwriteconfig";

const Suggested_Connection = [
  {
    userName: "Obadere Samson",
    position: "Nurse Educator",
    img: "/RNlogo/logo1.png",
  },
  {
    userName: "Oluwadamilare Daniel",
    position: "Nursing Student",
    img: "/RNlogo/logo1.png",
  },
  {
    userName: "Shorefunmi Adeniyi",
    position: "Nursing Student",
    img: "/RNlogo/logo1.png",
  },
];

const footerContent = [
  "About",
  "Accessibility",
  "Help Center",
  "Privacy Policy",
  "Terms of Service",
  "Advertising",
  "Business Services",
  "Careers",
  "More ",
];

const RightNav = () => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    try {
      const data = await appwriteService.getCurrentUser();
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Call fetchUser directly when needed, for example:
  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  const Suggested_user = ({ userName, position, img }) => {
    return (
      <>
        <div className="suggested_user">
          <div className="gg">
            <div className="user_img">
              <Image src={img} alt="" width={500} height={500} className="dpImgs" />
            </div>
            <div className="user_info">
              <div className="user_name">{userName}</div>
              <div className="user_position">{position}</div>
            </div>
          </div>
          <div className="suggest_connect_btn">Connect</div>
        </div>
      </>
    );
  };

  return (
    user && (
      <>
        <div className="intro">
          <div className="intro_upper">
            <div className="intro_dp">
              {/* <Image src={"/RNlogo/logo1.png"} height={50} width={50} alt="hey" /> */}
              <div className="intro_dpImg">{user.profile}</div>
            </div>
            
            <div className="intro_name">{user.name}</div>
            <div className="intro_title">{user.email}</div>
          </div>
          <div className="intro_txt">
            I am a registered nurse for over 10 years. I earned my RN certification at University of America more...
          </div>
        </div>
        <div className="Rnav_cont">
          <div className="suggest_txt">Suggested Connections</div>
          <div className="eachSuggestion">
            {Suggested_Connection.map((item) => {
              return (
                <>
                  <Suggested_user {...item} />
                </>
              );
            })}
          </div>
          <div className="viewMore">View More...</div>
        </div>
        <div className="premium">
          <div className="watchout"> Watch Out</div>
          <div className="premium_txt">RN Connected Premium coming soon</div>
        </div>

        <div className="rightNav_footer">
          <div className="links_cont">
            {footerContent.map((item) => {
              return (
                <>
                  <Link href={"#"} className="footer_link">
                    {item}
                  </Link>
                </>
              );
            })}
          </div>
          <div className="follow_icon">
            <Icon icon="logos:facebook" />
            <Icon icon="simple-icons:x" />
            <Icon icon="skill-icons:instagram" />
          </div>
          <div className="footer_txt">© 2023 RN Connected</div>
        </div>
      </>
    )
  );
};

export default RightNav;

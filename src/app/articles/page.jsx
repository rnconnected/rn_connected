import React from "react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "src/app/articles/page.css";
import Image from "next/image";
import Articles from "@/app/articles/article";
import Slidemenu from "@/components/slideMenu/slidemenu";

const articles_link = [
  { title_link: "lorem ipsum" },
  { title_link: "lorem ipsum" },
  { title_link: "lorem ipsum dolor sit amet" },
  { title_link: "Agnes nwamma syndrome" },
  { title_link: "lorem ipsum" },
  { title_link: "Agnes nwamma syndrome" },
];

const articles_ad = [
  {
    src: "/blog/blog_post_img/post1.png",
    date_posted: "14th July, 2023",
    author: "Rn Connected",
    topic: "Mental Disorder associated with SARS-CoV-2 and COVID 19",
    Text: "What is the subsequent risk of mental disorders among individuals with SARS-CoV-2 infection, and are the associations specific for COVID-19? ",
  },
  {
    src: "/blog/blog_post_img/post1.png",
    date_posted: "14th July, 2023",
    author: "Rn Connected",
    topic: "Mental Disorder associated with SARS-CoV-2 and COVID 19",
    Text: "What is the subsequent risk of mental disorders among individuals with SARS-CoV-2 infection, and are the associations specific for COVID-19? ",
  },
  {
    src: "/blog/blog_post_img/post1.png",
    date_posted: "14th July, 2023",
    author: "Rn Connected",
    topic: "Mental Disorder associated with SARS-CoV-2 and COVID 19",
    Text: "What is the subsequent risk of mental disorders infection associations specific for COVID-19? ",
  },
  {
    src: "/blog/blog_post_img/post1.png",
    date_posted: "14th July, 2023",
    author: "Rn Connected",
    topic: "Mental Disorder associated with SARS-CoV-2 and COVID 19",
    Text: "What is the subsequent risk of mental disorders among individuals with SARS-CoV-2 infection, and are the associations specific for COVID-19? ",
  },
];

function displayArrayInPairs(array, pairIndex) {
  const startIndex = pairIndex * 6;
  const pair = array.slice(startIndex, startIndex + 6);
  return pair;
}

const Article_page = () => {
  return (
    <div>
      <NavBar />
      <Slidemenu />
      <div className="main_cont">
        <div className="articles_left_section">
          <div className="totw_cont">
            <h1 className="totw_title">Top of the week</h1>
            <div className="totw_img">
              <Image
                src={"/blog/totw.png"}
                height={1000}
                width={1000}
                alt="totw image"
                className="towtImg"
              />
              <div className="towtImg_txt">
                Unlocking the Secrets of Multiple Sclerosis Progression: Brain
                Immune Cell Communication
              </div>
            </div>
          </div>

          {/* this is the explore section */}
          <div className="explore_cont">
            <h1 className="explore_title">Explore RN Connected Articles</h1>
            <div className="explore_txt">
              You can read a variety of news stories and health-related articles
              from us. We also conduct interviews with health experts, you can
              read the results of our interview with various health expert in
              the form of an article.
            </div>
          </div>
          {/* end of the explore section */}

          {/* the main articles section */}
          <div className="main_articles">
            {articles_ad.map((article, index) => {
              return (
                <Articles
                  key={index}
                  topic={article.topic}
                  date_posted={article.date_posted}
                  author={article.author}
                  src={article.src}
                  text={article.Text}
                />
              );
            })}
          </div>
          <div className="load_more">Load more</div>
          {/* end of the main articles section */}
        </div>

        {/* the right articles links */}
        <div className="articles_link_cont">
          <h1 className="soa_title">Search other articles</h1>
          <div className="articles_link_container">
            {articles_link.map((art_link, index) => {
              return (
                <div className="soa" key={index}>
                  {art_link.title_link}
                </div>
              );
            })}
          </div>
          <div className="more">More...</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article_page;

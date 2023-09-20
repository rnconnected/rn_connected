import React from "react";
import Image from "next/image";
import "@/app/articles/article.css";

const Articles = ({ topic, src, date_posted, author, text }) => {
  return (
    <article>
      <div className="art_cont">
        <Image src={src} height={1000} width={1000} alt={"hello world"} className="art_img"/>
        <div className="info_sec">
          <div className="topic"> {topic}</div>
          <div className="author">
            <span>Author :</span>
            {author}
          </div>
          <div className="date_posted">
            <span>Date Posted :</span>
            {date_posted}
          </div>
        </div>
      </div>
      <div className="art_txt">{text}</div>
    </article>
  );
};

export default Articles;

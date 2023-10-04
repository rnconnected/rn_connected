import React from "react";
import { Icon } from "@iconify/react";

const Commentbtn = ({ setCommentActive, commentActive, postId }) => {
  return (
    <>
      <div
        className="comment_icon"
        onClick={() => {
          setCommentActive(postId !== commentActive ? postId : null);
        }}
      >
        <Icon icon="iconamoon:comment-dots" className="Ricon" />
        <span>Comment</span>
      </div>
    </>
  );
};

export default Commentbtn;

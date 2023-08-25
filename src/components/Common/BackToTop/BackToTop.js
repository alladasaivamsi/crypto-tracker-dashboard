import React from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import "./BackToTop.css";

function BackToTop() {
  let myButton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 300
    ) {
      myButton.style.display = "flex";
    } else {
      myButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="back-to-top-btn" id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;

import React from "react";
import "./MainComponent.css";
import Button from "../../Common/Button/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.jpg";
import {motion} from "framer-motion"
import { RWebShare } from "react-web-share";

function MainComponent() {
    return (
      <>
        <div className="flex-info">
          <div className="left-component">
            <motion.h1
              className="track-crypto-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Track Crypto
            </motion.h1>
            <motion.h1
              className="real-time-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Real Time.
            </motion.h1>
            <p
              className="info-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Track crypto through a public api in real time. Visit the
              dashboard to do so!
            </p>
            <motion.div
              className="btn-flex"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a href="/dashboard">
                <Button text={"Dashboard"} />
              </a>
              <RWebShare
                data={{
                  text: "Crypto Dashboard made using React JS.",
                  url: "",
                  title: "CryptoDashboard.",
                }}
                style={{ color: "black" }}
                onClick={() => console.log("shared successfully!")}
              >
                <Button text="Share App" outline={true} />
              </RWebShare>
            </motion.div>
          </div>
          <div className="phone-container">
            <img src={gradient} className="gradient" />
            <motion.img
              src={iphone}
              className="iphone"
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div></div>
          </div>
        </div>
      </>
    );
}

export default MainComponent;
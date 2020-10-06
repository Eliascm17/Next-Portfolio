import { url } from "inspector";
import React from "react";
import styles from "./intro.module.css";

const Intro: React.FC<{}> = ({}) => {
  return (
    <>
      <div className={styles.me}></div>
      <div>hello</div>
    </>
  );
};

export default Intro;

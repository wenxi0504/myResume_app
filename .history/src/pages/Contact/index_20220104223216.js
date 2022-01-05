// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import styles from './contact.module.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return <div className={styles.wrap}>
    <div className={styles.box}>
      <div className={styles.title}>
        <h1>Contact Me</h1>
        <p>Email: wenxi1988@hotmail.com</p>
        <img src={require("../../assets/images/8530611_hand_point_right_icon.png")} alt="right pointer"/>
        <a  href={"https://onedrive.live.com/embed?cid=962C89212FFCD98B&resid=962C89212FFCD98B%2127301&authkey=ANmidHzG6CnqqhE"}>Resume Link</a>
         
          </div>
    </div>

  </div>;
};

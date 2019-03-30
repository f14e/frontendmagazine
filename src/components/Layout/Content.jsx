import React from "react";
import classNames from "classnames/bind";
import styles from "./Content.module.css";

const cx = classNames.bind(styles);

const Content = ({ children }) => (
  <div className={cx("content")}>{children}</div>
);

export default Content;

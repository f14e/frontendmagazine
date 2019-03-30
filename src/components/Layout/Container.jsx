import React from "react";
import classNames from "classnames/bind";
import styles from "./Container.module.css";

const cx = classNames.bind(styles);

const Container = ({ children }) => (
  <div className={cx("container")}>{children}</div>
);

export default Container;

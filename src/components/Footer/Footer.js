import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.css";

const cx = classNames.bind(styles);

const Footer = () => (
  <footer>
    <div className={cx("links")}>
      <a
        href="https://vk.com/frontendmagazine"
        target="_blank"
        rel="noreferrer noopener"
      >
        Вконтакте
      </a>
      ·
      <a
        href="https://t.me/frontendmagazine"
        target="_blank"
        rel="noreferrer noopener"
      >
        Telegram
      </a>
      ·
      <a
        href="https://www.instagram.com/frontendmag"
        target="_blank"
        rel="noreferrer noopener"
      >
        Instargram
      </a>
      ·
      <a href="/rss.xml" title="RSS Feed" target="_blank">
        RSS
      </a>
    </div>
  </footer>
);

export default Footer;

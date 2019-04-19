import React, { useRef, useEffect } from "react";
import twemoji from "twemoji";

export default ({ minutes }) => {
  const ref = useRef(null);

  let estimate = "🍷🍷🍷";

  if (minutes < 3) {
    estimate = "🥤";
  } else if (minutes < 6) {
    estimate = "🥤🥤🥤";
  } else if (minutes < 10) {
    estimate = "☕️🍩🍩";
  }

  useEffect(() => {
    if (!window.navigator.platform.match(/(iphone|ipad|macintel)/i)) {
      twemoji.parse(ref.current, { folder: "svg", ext: ".svg" });
    }
  }, []);

  return (
    <span style={{ fontSize: "1.2em" }} title={`${minutes} мин.`} ref={ref}>
      {estimate}
    </span>
  );
};

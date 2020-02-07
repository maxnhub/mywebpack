import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/swiper";
import "./scripts/ScrollMagic.min";
import "./scripts/scroll";
import "./scripts/scrollTop";
import "./scripts/lang";
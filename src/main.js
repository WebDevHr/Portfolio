import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faCircleDown,
  faUserSecret,
  faMagnifyingGlass,
  faEnvelope,
  faGlobe,
  faChevronUp,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faGithub,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faCircleDown,
  faMagnifyingGlass,
  faGithub,
  faTwitter,
  faGoogle,
  faEnvelope,
  faGlobe,
  faLinkedinIn,
  faChevronUp,
  faPhone,
  faLocationDot
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

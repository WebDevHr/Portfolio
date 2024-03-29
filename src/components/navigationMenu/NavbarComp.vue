<template>
  <div class="d-flex flex-row align-items-center flex-wrap flex-lg-nowrap justify-content-between">
    <div class="col-6 col-lg-3 d-flex justify-content-center align-items-center order-1">
      <transition appear>
        <div
          class="d-flex justify-content-center align-items-center rounded-circle size-of-logo shadow logo cursorPointer"
          @mouseover="logoOver" @mouseleave="logoOut" @click="goToHome">
          <img src="@/assets/pictures/hrLogo.png" alt="HR-logo" width="50" height="50" />
        </div>
      </transition>
    </div>

    <div class="col-10 col-lg-6 order-3 order-lg-2 mt-lg-0 mt-3 mx-auto mx-lg-0 menu" v-show="isClicked">
      <div v-for="(item, index) in navTabs" :key="index"
        class="py-2 px-3 px-md-2 px-xl-3 mx-2 my-0 fs-3 rounded item navItems cursorPointer fw-bold"
        @click="goToRelated(item)">
        {{ item }}
      </div>
    </div>
    <div class="col-6 col-lg-3 d-flex flex-row order-2 order-lg-3 justify-content-center">
      <div class="col-3 d-flex justify-content-center align-items-center menuButton">
        <div role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="toggleNavbar"
          aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

export default {
  data() {
    return {
      navTabs: ["Projects", "Skills", "About me", "Blog", "Contact"],
      isActive: false,
      isClicked: false,
      timeoutId: null,
    };
  },
  methods: {
    toggleNavbar() {
      gsap.set(".item", { opacity: 1, y: 0 });
      if (!this.isActive) {
        clearTimeout(this.timeoutId);
        this.isClicked = true;
        gsap.from(".item", {
          duration: 0.8,
          opacity: 0,
          y: -150,
          ease: "Power2.easeOut",
          stagger: 0.1,
        });
      } else {
        this.timeoutId = setTimeout(() => {
          this.isClicked = false;
        }, 1000);
        gsap.to(".item", {
          duration: 0.8,
          opacity: 0,
          y: -150,
          ease: "Power2.easeOut",
          stagger: 0.1,
        });
      }
      this.isActive = !this.isActive;
    },
    logoOver() {
      gsap.set(".logo", { scale: 1 });
      gsap.to(".logo", {
        duration: 0.8,
        scale: 1.25,
        ease: "Power1.easeOut",
      });
    },
    logoOut() {
      gsap.set(".logo", { scale: 1.25 });
      gsap.to(".logo", {
        duration: 0.8,
        scale: 1,
        ease: "Power2.easeOut",
      });
    },
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToRelated(item) {
      let tempRoute = item.toLowerCase().replace(" ", "");
      let tempPath = "/" + tempRoute;
      if (this.$route.path != tempPath) {
        this.$router.push({ name: tempRoute });
      }
      this.isActive = !this.isActive;
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style scoped>
@import url("@/assets/fonts.css");

* {
  font-family: "DancingScript", sans-serif;
}

.fontFamilyDancingScript {
  font-family: "DancingScript", sans-serif;
}

.size-of-logo {
  width: 60px;
  height: 60px;
}

.hamburger {
  width: 50px;
  height: 50px;
}

.hamburger span {
  width: 30px;
  height: 5px;
  background: #000;
}

.navbar-burger {
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  padding: 0;
  position: relative;
  width: 2rem;
}

.navbar-burger span {
  background-color: #000;
  display: block;
  height: 3.75px;
  left: 0;
  position: absolute;
  transform: rotate(0deg);
  transition: all 0.8s ease-in-out;
  width: 100%;
  border-radius: 5px;
}

.navbar-burger span:nth-child(1) {
  top: 0.3rem;
}

.navbar-burger span:nth-child(2) {
  top: 0.85rem;
  transition: all 0.4s ease-in-out;
}

.navbar-burger span:nth-child(3) {
  top: 1.4rem;
}

.navbar-burger.is-active span:nth-child(1) {
  transform: rotate(405deg);
  top: 0.85rem;
  left: 0;
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
  width: 0px;
  height: 0px;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: rotate(-405deg);
  top: 0.85rem;
  left: 0;
}

.navItems {
  color: rgb(150, 150, 150);
  float: right;
  transition: color 0.5s, box-shadow 0.5s;
}

.navItems:hover {
  color: black;
  box-shadow: 5px 5px 15px rgb(176, 176, 176);
}

.floatLeft {
  float: left;
}

.cursorPointer {
  cursor: pointer;
}

@media screen and (max-width: 991px) {
  .menu {
    display: flex;
    flex-direction: column;
    background-color: white;
  }
}

.menu {
  display: flex;
  justify-content: center;
}
</style>

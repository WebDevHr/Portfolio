<template>
  <div id="app">
    <NavbarComp />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>

    <FollowLinks />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
import FollowLinks from "@/components/FollowLinks.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    NavbarComp,
    FooterComp,
    FollowLinks,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url("@/assets/fonts.css");
.fontFamilyDancingScript {
  font-family: "DancingScript", sans-serif;
}
.fontFamilyKalam {
  font-family: "Kalam", sans-serif;
}
.fontFamilyCourgette {
  font-family: "Courgette", sans-serif;
}

/** Transitions **/
.fade-enter {
  opacity: 0;
  translate: -30px 0px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-leave-to {
  opacity: 0;
  translate: -30px 0px;
}
</style>

<template>
  <div id="app">
    <NavbarComp />
    <FirstPart />
    <ProjectsPortfolio />
    <FollowLinks />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavbarComp from "./components/NavbarComp.vue";
import FirstPart from "./components/FirstPart.vue";
import ProjectsPortfolio from "./components/ProjectsPortfolio.vue";
import FollowLinks from "./components/FollowLinks.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NavbarComp,
    FirstPart,
    ProjectsPortfolio,
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
</style>

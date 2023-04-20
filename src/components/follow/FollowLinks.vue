<template>
  <div class="mb-5 border-top pt-5 container-lg">
    <div>
      <h1 class="fw-bolder mb-5">Follow me</h1>
    </div>
    <div class="d-flex justify-content-center">
      <LinkBox
        v-for="(linkIcon, index) in linksIcon"
        :key="index"
        :icon="linkIcon.iconL"
        :href="linkIcon.address"
      />
    </div>
  </div>
</template>

<script>
import LinkBox from "./LinkBox.vue";
export default {
  components: {
    LinkBox,
  },
  data() {
    return {
      linksIcon: [
        { iconL: ["fas", "globe"], address: "https://webdevhr.com/" },
        { iconL: ["fab", "github"], address: "https://github.com/WebDevHr" },
        { iconL: ["fab", "twitter"], address: "#" },
        {
          iconL: ["fab", "linkedin-in"],
          address: "https://www.linkedin.com/in/hossein-razeghian-958b0824b/",
        },
        { iconL: ["fas", "envelope"], address: "mailto:razeqian@gmail.com" },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Kalam", sans-serif;
}
</style>

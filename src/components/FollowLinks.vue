<template>
  <div class="mt-5">
    <div>
      <h1 class="fw-bolder mb-5">Follow me</h1>
    </div>
    <div class="d-flex justify-content-center">
      <LinkBox
        v-for="(linkIcon, index) in linksIcon"
        :key="index"
        :icon="linkIcon"
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
        ["fas", "globe"],
        ["fab", "github"],
        ["fab", "twitter"],
        ["fab", "linkedin-in"],
        ["fas", "envelope"],
      ],
    };
  },
};
</script>

<style></style>

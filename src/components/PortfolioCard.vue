<template>
  <div class="card pr-4 pb-4 shadow cardHover" @click="handleClick">
    <a :href="cardHref" class="text-decoration-none text-secondary">
      <div class="border rounded bg-secondary">
        <img
          :src="imageUrl"
          class="p-2"
          alt="Card image"
          width="100%"
          style="object-fit: cover"
        />
      </div>

      <div class="card-body text-start mt-3">
        <h5 class="card-title text-black">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
// import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

// gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
export default {
  props: {
    imageUrl: String,
    title: String,
    description: String,
    cardHref: String,
  },
  methods: {
    handleClick() {
      // handle click event
    },
    // mouseOver() {
    //   gsap.fromTo(
    //     ".gsapCard",
    //     {
    //       duration: 1,
    //       scale: 1,
    //       boxShadow:
    //         "0px 0px 0px 0px #0066ff, 0px 0px 0px 0px rgba(0, 153, 255, 1)",
    //     },
    //     {
    //       duration: 1,
    //       scale: 1.1,
    //       boxShadow:
    //         "0px 0px 30px 8px #0066ff, 0px 0px 30px 8px rgba(0, 153, 255, 1)",
    //     }
    //   );
    // },
  },
};
</script>

<style>
.card {
  width: 18rem;
  cursor: pointer;
}
.cardHover:hover {
  box-shadow: 20px 20px #888888;
  scale: 1.1;
}
</style>

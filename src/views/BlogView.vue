<template>
  <div>
    <h1
      class="d-flex justify-content-center mt-5 fontFamilyCourgette fw-bolder"
    >
      Blog
    </h1>
    <BlogNews />
    <h3 class="fontFamilyKalam my-5">Recent Posts</h3>
    <BlogCard v-for="(item, index) in cardData" :key="index" :item="item" />
  </div>
</template>

<script>
import BlogNews from "@/components/Blog/BlogNews.vue";
import BlogCard from "@/components/Blog/BlogCard.vue";

export default {
  components: {
    BlogNews,
    BlogCard,
  },
  data() {
    return {
      cardData: [
        {
          title: "What is Gsap ? ",
          description:
            "GSAP (GreenSock Animation Platform) is a popular animation library for creating high-performance animations and interactive user experiences for the web. It was developed by GreenSock, a software company that specializes in creating animation tools and plugins.",
          by: "Admin",
          imgSrc: "gsap.jpg",
          likes: 10,
          comments: 10,
          lastUpdate: 3,
        },
        {
          title: "What Does Nuxt.JS do ? ",
          description:
            "Nuxt.js is a free and open-source framework for building web applications using Vue.js. It is based on the concept of server-side rendering (SSR) and provides a set of conventions and tools that make it easy to create universal (isomorphic) Vue.js applications that can run both on the server and the client.",
          by: "Admin",
          imgSrc: "nuxt.jpg",
          likes: 100,
          comments: 20,
          lastUpdate: 45,
        },
      ],
    };
  },
};
</script>

<style scoped></style>

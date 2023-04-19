<template>
  <div>
    <BlogNews />
    <BlogCard />
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
};
</script>

<style scoped></style>

<template>
  <div class="p-3 m-2 skillcard rounded">
    <a :href="skillHref" class="text-decoration-none titleColor">
      <img :src="icon" alt="Icon" width="100" height="100" />
      <div class="titleColor fw-bold fontFamilyKalam">
        <slot></slot></div
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    skillHref: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.skillcard {
  transition: all 0.5s;
}
.skillcard:hover {
  box-shadow: 5px 5px 15px rgb(147, 147, 147);
  color: black;
  scale: 1.05;
  translate: 0px -10px;
}
.titleColor {
  transition: all 0.5s;
  color: rgb(200, 200, 200);
}
.skillcard:hover .titleColor {
  color: black;
}
</style>

<template>
  <div class="rounded iconStyle iconBoxSize me-2 me-lg-4">
    <a
      :href="href"
      class="iconBoxSize text-decoration-none d-flex justify-content-center align-items-center linkClass"
      ><font-awesome-icon class="fs-3" :icon="icon"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    icon: Array,
    href: String,
  },
};
</script>

<style scoped>
.iconBoxSize {
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
}
.iconStyle {
  background-color: rgb(245, 245, 245);
  transition: background-color 0.5s;
}
.iconStyle:hover {
  background-color: rgb(230, 230, 230);
}
.linkClass {
  color: rgb(124, 124, 124);
  transition: color 0.5s;
}
.linkClass:hover {
  color: rgb(14, 14, 14);
}
</style>

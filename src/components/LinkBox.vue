<template>
  <div
    class="rounded d-flex justify-content-center align-items-center iconStyle"
  >
    <font-awesome-icon class="fs-3" :icon="icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: Array,
  },
};
</script>

<style scoped>
.iconStyle {
  width: 4.5rem;
  height: 4.5rem;
  background-color: rgb(245, 245, 245);
  margin-right: 2rem;
}
.iconStyle:hover {
  background-color: rgb(230, 230, 230);
}
</style>

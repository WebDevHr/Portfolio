<template>
  <div class="footerStyle d-flex align-items-center">
    <a
      href="#"
      type="button"
      class="btn btn-outline-secondary buttonSize ms-auto me-5 rounded-circle d-flex align-items-center justify-content-center"
    >
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footerStyle {
  height: 80px;
  background-color: rgb(245, 245, 245);
  box-shadow: 10px 10px;
}
.buttonSize {
  width: 40px;
  height: 40px;
}
</style>

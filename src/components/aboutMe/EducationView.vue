<template>
  <div class="d-flex flex-column align-items-start my-5 mx-auto col-8">
    <h1 class="text-start fontFamilyCourgette fw-bold mb-4">Education</h1>
    <div class="d-flex flex-column text-start flex-lg-row fontFamilyKalam">
      <img src="@/assets/Gazi.jpg" alt="Gazi" class="imageStyle ms-4 ms-lg-0" />
      <div class="mt-3 mt-lg-5 ms-lg-5">
        <h3>Gazi University</h3>
        <h6>Computer Engineering</h6>
        <h6>2021 - 2025</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.imageStyle {
  width: 200px;
  height: 200px;
}

@media screen and (max-width: 991px) {
  .imageStyle {
    width: 100px;
    height: 100px;
  }
}
</style>

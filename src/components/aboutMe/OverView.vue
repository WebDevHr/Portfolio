<template>
  <div class="d-flex flex-row my-5">
    <div class="col-2 ms-auto d-flex justify-content-start">
      <img
        src="@/assets/me.jpg"
        alt="Hossein"
        class="border rounded shadow cover"
        width="200px"
        height="200px"
      />
    </div>
    <div class="d-flex flex-column align-items-start me-auto col-6">
      <h1 class="text-start fontFamilyCourgette fw-bold mb-4">Overview</h1>
      <p class="fontFamilyKalam indent justify">
        I am Hossein Razeghian, a computer engineering student at Gazi
        University in Ankara, Turkey. I am a front-end developer and have
        recently started to expand my knowledge in back-end development. I am
        familiar with Vue.js, jQuery, and Bootstrap as client-side rendering
        tools, as well as Node.js, specifically Express.js, MongoDB, and Spring
        Boot as server-side rendering tools.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.indent {
  text-indent: 20px;
}
.justify {
  text-align: justify;
}
.cover {
  object-fit: cover;
}
</style>

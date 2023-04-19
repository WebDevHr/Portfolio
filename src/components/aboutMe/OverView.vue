<template>
  <div class="d-flex flex-column flex-lg-row my-5 col-lg-8 mx-auto">
    <div class="d-flex flex-lg-row fontFamilyKalam mx-auto mx-lg-0">
      <img
        src="@/assets/hossein.jpg"
        alt="Hossein"
        class="border rounded-circle shadow cover"
        width="200px"
        height="200px"
      />
    </div>
    <div class="mt-3 ms-lg-5 d-flex flex-column align-items-center">
      <h1
        class="fontFamilyCourgette fw-bold mb-4 mt-3 mt-lg-0 align-self-lg-start"
      >
        Overview
      </h1>
      <p class="fontFamilyKalam indent justify col-lg-12 col-9">
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

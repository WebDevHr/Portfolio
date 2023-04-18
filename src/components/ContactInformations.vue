<template>
  <div class="col-lg-6 col-12 my-5">
    <h1 class="mt-5 mb-3">Contact details</h1>
    <div
      class="d-flex justify-content-center align-items-center underlineStyle p-2"
    >
      <a
        class="text-decoration-none color"
        href="https://www.google.com/maps/place/Gazi+University/@39.9396355,32.819731,17z/data=!3m1!4b1!4m6!3m5!1s0x14d34eda2bd572e3:0xc4944b9ae7b9927!8m2!3d39.9396355!4d32.8223059!16zL20vMDdoNjM4"
        ><font-awesome-icon
          class="me-2"
          :icon="['fas', 'location-dot']"
        />Emniyet mah, Gazi Üniversitesi Rektörlüğü, Bandırma Cad. No:6/1, 06560
        Yenimahalle/Ankara</a
      >
    </div>
    <div
      class="d-flex justify-content-center align-items-center underlineStyle p-2"
    >
      <a class="text-decoration-none color" href="mailto:razeqian@gmail.com"
        ><font-awesome-icon
          class="me-2"
          :icon="['fas', 'envelope']"
        />razeqian@gmail.com</a
      >
    </div>
    <div
      class="d-flex justify-content-center align-items-center underlineStyle p-2"
    >
      <a href="tel:+905373018662" class="text-decoration-none color"
        ><font-awesome-icon class="me-2" :icon="['fas', 'phone']" />
        Call me at +90 (537) 301-8662
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Courgette", sans-serif;
}
.underlineStyle {
  transition: text-decoration 0.5s;
}
.underlineStyle:hover {
  text-decoration: underline;
}
.color {
  color: rgb(151, 151, 151);
  transition: color 0.3s;
}
.color:hover {
  color: rgb(49, 49, 49);
}
</style>

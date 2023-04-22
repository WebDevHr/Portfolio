<template>
  <div
    class="container-lg d-flex flex-column flex-lg-row justify-content-center align-items-center mb-5"
  >
    <div
      class="col-8 col-lg-4 d-felx p-3 mb-5 text-center text-lg-start my-5 my-lg-0"
    >
      <h1 class="fw-bolder fontFamilyKalam">Hi, I'm Hossein</h1>
      <h4 class="text-myGrey fontFamilyKalam">
        Front-end Developer who tends to be a Full-stack Developer
      </h4>
      <a :href="fileUrl" download
        ><button
          type="button"
          class="btn btn-outline-success btn-lg mt-4 shadow fontFamilyKalam"
        >
          <font-awesome-icon icon="fa-solid fa-circle-down" />
          <span class="mx-2">Download CV</span>
        </button></a
      >
    </div>
    <div class="col-8">
      <img src="@/assets/pictures/developer.svg" alt="Developer" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileUrl: "https://1drv.ms/b/s!AnkELWSYXNGBeKC9OME-x6hWthk?e=VdmFRw",
    };
  },
};
</script>

<style scoped>
.text-myGrey {
  color: rgb(176, 176, 176);
}
</style>

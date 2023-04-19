<template>
  <div class="d-flex flex-column flex-wrap flex-lg-nowrap my-5 mx-auto col-8">
    <h1
      class="text-start fontFamilyCourgette fw-bold mb-4 align-self-center align-self-lg-start"
    >
      Languages
    </h1>
    <div
      class="d-flex flex-lg-row flex-column fontFamilyKalam ms-lg-4 my-2"
      v-for="(language, index) in languages"
      :key="index"
    >
      <div
        class="fs-3 fw-bold me-lg-4 lanWidth text-start text-black align-self-center align-self-lg-start my-auto"
      >
        {{ language.lan }}
      </div>
      <div
        class="fs-5 text-secondary align-self-center align-self-lg-start my-auto"
      >
        {{ language.pro }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { lan: "Persian", pro: "Native" },
        { lan: "English", pro: "Professional working proficiency" },
        { lan: "Turkish", pro: "Professional working proficiency" },
      ],
    };
  },
};
</script>

<style scoped>
.xxx {
  align-items: center;
}
</style>

<template>
  <div class="d-flex flex-column align-items-start my-5 mx-auto col-8">
    <h1 class="text-start fontFamilyCourgette fw-bold mb-4">Languages</h1>
    <div
      class="d-flex align-items-center fontFamilyKalam ms-lg-4"
      v-for="(language, index) in languages"
      :key="index"
    >
      <div class="fs-3 fw-bold my-0 lanWidth text-start text-black">
        {{ language.lan }}
      </div>
      <div class="fs-5 text-secondary">{{ language.pro }}</div>
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
.lanWidth {
  width: 150px;
}
</style>

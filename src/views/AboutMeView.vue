<template>
  <div>
    <OverView />
    <EducationView />
    <LanguagesView />
  </div>
</template>

<script>
import OverView from "@/components/aboutMe/OverView.vue";
import EducationView from "@/components/aboutMe/EducationView.vue";
import LanguagesView from "@/components/aboutMe/LanguagesView.vue";

export default {
  components: {
    OverView,
    EducationView,
    LanguagesView,
  },
};
</script>

<style scoped></style>

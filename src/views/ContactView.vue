<template>
  <div class="container-lg d-flex flex-column">
    <div>
      <p class="mb-0 mt-5 fontFamilyKalam">Want to Contact Me ?</p>
      <h1 class="mt-0 fontFamilyCourgette">Contact Information</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-center">
      <ContactForm />
      <ContactInformations />
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/contactPage/ContactForm.vue";
import ContactInformations from "@/components/contactPage/ContactInformations.vue";

export default {
  components: {
    ContactForm,
    ContactInformations,
  },
};
</script>

<style></style>

<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ message }}</p>
      <button @click="confirm">OK</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    confirm() {
      this.$emit("confirmed");
    },
    cancel() {
      this.$emit("cancelled");
    },
  },
};
</script>

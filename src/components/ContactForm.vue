<template>
  <div
    class="my-5 col-lg-5 col-12 d-flex justify-content-center align-items-center"
  >
    <div class="col-12">
      <form class="border rounded p-4" @submit.prevent="submitForm">
        <div class="mb-3">
          <label
            for="exampleInputEmail1"
            class="form-label d-flex justify-content-start ms-1"
            >Full Name</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full Name"
            v-model="formValues.fullName"
          />
          <div id="emailHelp" class="text-start form-text ms-2">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label
            for="exampleInputEmail1"
            class="form-label d-flex justify-content-start ms-1"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            v-model="formValues.email"
          />
          <div id="emailHelp" class="text-start form-text ms-2">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label d-flex justify-content-start ms-1"
            >Subject</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Subject"
            v-model="formValues.subject"
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label d-flex justify-content-start ms-1"
            >Message</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
            v-model="formValues.message"
          ></textarea>
        </div>
        <div class="d-flex justify-content-center ms-1">
          <button
            type="submit"
            class="btn btn-outline-secondary px-5 fs-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body fs-3">Submit the form ?</div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              style="width: 100px"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-success"
              style="width: 100px"
              @click="submitForm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        fullName: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      const formInfo = {
        fullName: this.formValues.fullName,
        email: this.formValues.email,
        subject: this.formValues.subject,
        message: this.formValues.message,
      };
      console.log(formInfo);
      localStorage.setItem("FormInformations", JSON.stringify(formInfo));

      this.formValues.fullName = "";
      this.formValues.email = "";
      this.formValues.subject = "";
      this.formValues.message = "";
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Courgette", sans-serif;
}
</style>

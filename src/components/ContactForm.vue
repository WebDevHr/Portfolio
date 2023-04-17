<template>
  <div
    class="my-5 col-lg-5 col-12 d-flex justify-content-center align-items-center"
  >
    <div class="col-12">
      <form class="border rounded p-4">
        <div class="mb-3">
          <label
            for="exampleInputEmail1"
            class="form-label d-flex justify-content-start ms-1"
            >Full Name</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full Name"
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
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Subject"
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
          ></textarea>
        </div>
        <div class="d-flex justify-content-start ms-1">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
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
</style>

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
      fileUrl:
        "https://public.am.files.1drv.com/y4mbiWJQ0q-DmSHa_MGJnEFE0fVN0wgCNz1z_dclOOC7Q7qN0brc_mOzvUn-cNwLall4yXFR6BSShzUfkKuw-TjMTz_T5zdNLkPvPKDCDdSE6nCiwtrAZekVFsTS1SjYKe2Zv2zxSeZbRDqAXjZrNMpOqEr24-XXh4K8p_JhhBTQ_VGdFcNsHDokMGh_2C0kTkqmiNe1_1-dcNKhFYd6Hxy2FpjFlUuLCL5J9puH4qmqQM?AVOverride=1",
    };
  },
};
</script>

<style scoped>
.text-myGrey {
  color: rgb(176, 176, 176);
}
</style>

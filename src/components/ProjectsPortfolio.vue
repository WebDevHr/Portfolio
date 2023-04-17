<template>
  <div class="container-lg mt-5 my-3 my-lg-0 mt-lg-5">
    <div class="d-flex flex-column">
      <div class="mb-5">
        <p class="letterSpacing mb-0 fontFamilyDancingScript fw-bold">
          What I Did ?
        </p>
        <h1 class="fw-bolder mt-0 fontFamilyKalam">Projects Portfolio</h1>
        <h5 class="letterSpacing text-secondary mt-4 fontFamilyKalam">
          Search projects by title or filter by category
        </h5>
      </div>
      <div
        class="d-flex flex-row justify-content-center justify-content-lg-start border-bottom pb-3"
      >
        <button
          type="button"
          class="btn btn-outline-secondary me-1 d-none d-lg-inline inputBorder"
        >
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
        <input
          v-model="searchValue"
          type="text"
          class="rounded inputSize inputBorder"
          id="myInput"
          placeholder="Search projects"
        />
        <select
          class="form-select selectWidth ms-auto"
          aria-label="Default select example"
          v-model="selectedOption"
        >
          <option value="all" selected>All Projects</option>
          <option value="webApp">Web application</option>
          <option value="mobApp">Mobile application</option>
          <option value="others">Others</option>
        </select>
      </div>
    </div>
    <div
      class="my-4 d-flex justify-content-center justify-content-lg-start flex-wrap"
    >
      <PortfolioCard
        class="m-3"
        v-for="(project, index) in selectedProjects"
        :key="index"
        :imageUrl="project.imageUrl"
        :title="project.title"
        :description="project.description"
        :cardHref="project.cardHref"
      />
    </div>
    <div class="pb-5 border-bottom">
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-5 my-5 shadow"
        @click="goToProjects"
      >
        More Projects
      </button>
    </div>
  </div>
</template>

<script>
import PortfolioCard from "./PortfolioCard.vue";
export default {
  components: { PortfolioCard },
  data() {
    return {
      projects: [
        {
          title: "E-Commerce Web App",
          imageUrl:
            "https://live.staticflickr.com/65535/52755105237_a2b3c9c339_k.jpg",
          description:
            "An EXAMPLE application of an E-shop. In this project I used NodeJS, VueJs, BootStrapVue, MongoDB and some other Technologies.",
          cardHref: "https://hrfirstapp.herokuapp.com/",
          category: "webApp",
        },
        {
          title: "To-Do List",
          imageUrl:
            "https://live.staticflickr.com/65535/52755627361_0977dbd798_k.jpg",
          description: "It's a simple todo-list application with VueJS.",
          cardHref: "https://hungry-fermi-921bfa.netlify.app/",
          category: "mobApp",
        },
        {
          title: "Quiz Web App",
          imageUrl:
            "https://live.staticflickr.com/65535/52755174242_21cc612476_k.jpg",
          description:
            "It's a Quiz app that fetches some questions from Open Trivia API, and shows the questions , answers and number of correct answers.",
          cardHref: "https://hosseinrazeghian.netlify.app/",
          category: "webApp",
        },
        {
          title: "Quiz Web App",
          imageUrl:
            "https://live.staticflickr.com/65535/52755174242_21cc612476_k.jpg",
          description:
            "It's a Quiz app that fetches some questions from Open Trivia API, and shows the questions , answers and number of correct answers.",
          cardHref: "https://hosseinrazeghian.netlify.app/",
          category: "webApp",
        },
      ],
      selectedOption: "all",
      searchValue: "",
    };
  },
  computed: {
    selectedProjects() {
      if (this.searchValue == "") {
        if (this.selectedOption != "all") {
          let selected = this.projects.filter(
            (x) => x.category == this.selectedOption
          );
          return selected;
        } else {
          return this.projects;
        }
      } else {
        let searched = this.projects.filter((x) => {
          if (
            x.description
              .toLowerCase()
              .includes(this.searchValue.toLowerCase()) ||
            x.title.toLowerCase().includes(this.searchValue.toLowerCase())
          )
            return x;
        });
        return searched;
      }
    },
  },
  methods: {
    goToProjects() {
      if (this.$route.path !== "/projects") {
        this.$router.push("/projects");
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Kalam", sans-serif;
}
.letterSpacing {
  letter-spacing: 1px;
}
.inputSize {
  width: 200px;
  height: 45px;
}
.inputBorder {
  border: 1px solid rgb(188, 188, 188);
}
.selectWidth {
  width: 200px;
}
#myInput {
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
}
input:focus,
select:focus {
  outline: none;
  box-shadow: none;
}
</style>

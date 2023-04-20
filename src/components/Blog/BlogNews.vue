<template>
  <div
    id="my-carousel"
    class="carousel slide my-5 col-10 mx-auto d-none d-md-flex"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in carouselItems"
        :key="index"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="index"
        :class="index === 0 ? 'active' : ''"
        aria-current="true"
        :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :id="'carousel-' + index"
        :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
      >
        <img :src="item.image" class="d-block w-100 cover" :alt="item.alt" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.title }}</h5>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#my-carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#my-carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      carouselItems: [],
    };
  },
  computed: {
    activeSlideIndex() {
      const activeSlide = document.querySelector(".carousel-item.active");
      const activeSlideIndex = Array.prototype.indexOf.call(
        activeSlide.parentNode.children,
        activeSlide
      );
      return activeSlideIndex;
    },
  },
  mounted() {
    const url = "http://eventregistry.org/api/v1/article/getArticles";
    const data = {
      action: "getArticles",
      keyword: "javascript",
      articlesPage: 1,
      articlesCount: 3,
      articlesSortBy: "date",
      articlesSortByAsc: false,
      articlesArticleBodyLen: -1,
      resultType: "articles",
      dataType: ["news", "pr"],
      apiKey: "ff4bd938-9cb5-4d55-9f06-8106dd347272",
      forceMaxDataTimeWindow: 31,
    };
    const headers = { "Content-Type": "application/json" };

    axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        this.carouselItems = response.data.articles.results;
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.cover {
  object-fit: cover;
}
img {
  height: 500px;
}
</style>

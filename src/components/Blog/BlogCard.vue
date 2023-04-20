<template>
  <div class="my-5 fontFamilyKalam">
    <div class="card mb-3 col-10 mx-auto">
      <div class="row g-0">
        <div class="col-md-4 bg-secondary">
          <img
            :src="require(`@/assets/pictures/${item.imgSrc}`)"
            class="img-fluid rounded-start"
            :alt="item.title"
          />
        </div>
        <div class="col-md-8 ps-md-4">
          <div class="card-body">
            <h4 class="card-title text-md-start fontFamilyKalam fw-bolder">
              {{ item.title }}
            </h4>
            <div class="d-flex fw-bold text-secondary mb-2">
              <div class="fontFamilyKalam">By: {{ item.by }}</div>
              <div class="ms-auto badgeWidth">
                <font-awesome-icon :icon="['fas', 'heart']" class="me-1" />{{
                  item.likes
                }}
              </div>
              <div class="badgeWidth">
                <font-awesome-icon :icon="['fas', 'comment']" class="me-1" />{{
                  item.comments
                }}
              </div>
            </div>
            <p class="card-text text-md-start">
              {{ item.description }}
            </p>
            <p class="card-text text-md-start">
              <small class="text-muted"
                >Last updated {{ item.lastUpdate }} mins ago</small
              >
            </p>
            <div class="text-start ms-4">
              <a href="" class="readMore">Read More >>></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.badgeWidth {
  width: 50px;
}
.readMore {
  color: rgb(180, 180, 180);
  transition: all 0.3s;
}
.readMore:hover {
  color: black;
  font-weight: bold;
}
</style>

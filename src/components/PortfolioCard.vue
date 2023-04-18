<template>
  <div class="card pr-4 pb-4 cardHover" @click="handleClick">
    <a :href="cardHref" class="text-decoration-none text-secondary">
      <div class="border-bottom">
        <img
          :src="imageUrl"
          class="p-2"
          alt="Card image"
          width="100%"
          style="object-fit: cover"
        />
      </div>

      <div class="card-body text-start mt-3">
        <h5 class="card-title text-black titleStyle fw-bolder">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    title: String,
    description: String,
    cardHref: String,
  },
  methods: {
    handleClick() {
      // handle click event
    },
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
  cursor: pointer;
}
.cardHover {
  transition: box-shadow 0.5s, scale 0.5s, border 0.5s;
}
.cardHover:hover {
  box-shadow: 5px 5px 10px rgba(120, 120, 120, 0.468);
  scale: 1.1;
  border: 1px solid rgb(71, 71, 71);
}
.backgroundColor {
  background-color: rgb(222, 222, 222);
}
</style>

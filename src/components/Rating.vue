<template>
  <div class="rating">
    <font-awesome-icon v-for="stars in rating" :key="id" class="rating__icon_checked" icon="star" />
    <font-awesome-icon v-for="stars in (5-rating)" :key="id" class="rating__icon" icon="star" />
  </div>
</template>

<script>

export default {
  name: 'Rating',
  props: {
    id: Number,
    rating: Number,
  },
  data() {
    return {
    };
  },
  
  computed: {
  },
};
</script>

<style scoped lang="sass">
@import '../styles/global.sass'

.rating
  display: flex
  align-items: center
  padding: 10px 0 10px 0
  &__icon
    color: $tertiary-color
    &_checked
      color: orange
</style>

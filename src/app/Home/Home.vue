<template>
  <div class="home">
    <div class="home__header">
      <img src="https://cdn.dribbble.com/users/31752/screenshots/1528969/globe-dribbble-400x300_1_.gif" alt="World" height="180" width="250">
    </div>
    <div class="home__title">SKILLS</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.home
  display: flex
  flex-direction: column
  flex: 1
  overflow: auto
  &__header
    display: flex
    justify-content: flex-end
    width: 100%
  &__title
    display: flex
    justify-content: center
    width: 100%
    color: $primary-color
    font-size: 30px
    font-weight: bold
</style>

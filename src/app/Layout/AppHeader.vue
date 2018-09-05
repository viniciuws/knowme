<template>
  <div class="header">
    <router-link to="/" class="header__menu">HOME</router-link>
    <router-link to="/about" class="header__menu">ABOUT</router-link>
    <router-link to="/contact" class="header__menu">CONTACT</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.header
  display: flex
  flex-direction: row
  background-color: $primary-color
  &__menu
    font-weight: bold
    padding: 10px
    text-decoration: none
    color: $secondary-font-color
    &:hover
      background-color: $tertiary-color
      cursor: pointer
</style>

<template>
  <div class="header">
    <div class="header__menu">HOME</div>
    <div class="header__menu">ABOUT</div>
    <div class="header__menu">CONTACT</div>
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
  padding: 0px
  background-color: $tertiary-color
  &__menu
    border: 
    font-size: 16px
    font-weight: bold
    padding: 10px
    &:hover
      background-color: $primary-color
      cursor: pointer
    
</style>

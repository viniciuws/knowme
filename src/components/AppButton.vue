<template>
  <div class="app-button">
    {{ description }}
  </div>
</template>

<script>

export default {
  name: 'AppButton',
  props: {
    description: String,
  },
};
</script>

<style scoped lang="sass">
@import '../styles/global.sass'
.app-button
  padding: 10px
  font-weight: bold
  background-color: $secondary-color-button
  color: $primary-font-color
  border-radius: 5px
  box-shadow: -1px 1px 2px $primary-color;
  &:hover
    cursor: pointer
    background-color: $primary-color-button
    box-shadow: -3px 3px 0px $secondary-color;
    color: $secondary-font-color
</style>

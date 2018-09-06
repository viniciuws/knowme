<template>
  <div class="footer">
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.footer
  display: flex
  justify-content: center
  flex-shrink: 1
  height: 100px
  font-weight: bold
  background-color: $primary-color
  color: $secondary-font-color
</style>

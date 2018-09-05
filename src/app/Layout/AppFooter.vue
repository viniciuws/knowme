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
  flex: 1
  font-weight: bold
  background-color: $primary-color
  color: $secondary-font-color
</style>

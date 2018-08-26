<template>
  <div class="home">
    HOME
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
  justify-content: center
  padding: 10px
</style>

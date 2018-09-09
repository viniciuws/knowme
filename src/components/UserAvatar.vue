<template>
  <div class="user-avatar">
  </div>
</template>

<script>

export default {
  name: 'UserAvatar',
};
</script>

<style scoped lang="sass">
@import '../styles/global.sass'

.user-avatar
   width: 150px
   height: 150px
   background-image: url('../assets/user.png')
   border-radius: 50%
   border: 1px solid $secondary-color
</style>

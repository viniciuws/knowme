<template>
  <div class="user-avatar">
    <div class="user-avatar__pumping"></div>
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
  flex-shrink: 0
  &__pumping
    width: 148px
    height: 150px
    animation: avatar 3s ease-out infinite
    position: relative
    border-radius: 50%
    border: 2px solid $primary-color
    z-index: -1
  
@keyframes avatar
  0%
    -webkit-transform: scale( 0.95 )
    -moz-transform: scale( 0.95 )
    -o-transform: scale( 0.95 )
    -ms-transform: scale( 0.95 )
    transform: scale( 0.95 )
  50% 
  100%
    -webkit-transform: scale( 1.25 )
    -moz-transform: scale( 1.25 )
    -o-transform: scale( 1.25 )
    -ms-transform: scale( 1.25 )
    transform: scale( 1.25 )
    opacity: 0
</style>

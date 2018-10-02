<template>
  <div>
    <img class="user-avatar" v-bind:src="avatar" />
    <div class="user-avatar__pumping"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserAvatar',
  computed: {
    ...mapGetters(['avatar']),
  },
};
</script>

<style scoped lang="sass">
@import '../styles/global.sass'

.user-avatar
  width: 150px
  height: 150px
  border-radius: 50%
  border: 1px solid $secondary-color
  flex-shrink: 1
  &__pumping
    margin-top: -152px;
    width: 150px
    height: 148px
    animation: avatar 3s ease-out infinite
    position: relative
    border-radius: 50%
    border: 2px solid $primary-color
    z-index: -1

@keyframes avatar
  0%
    transform: scale( 0.95 )
  100%
    transform: scale( 1.25 )
    opacity: 0
</style>

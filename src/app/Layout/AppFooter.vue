<template>
  <div class="footer">
    <div class="footer__swap" v-on:click="$emit('swap')">
      SWAP
    </div>
    <SocialLogos/>
  </div>
</template>

<script>
import SocialLogos from '../../components/SocialLogos.vue';

export default {
  name: 'AppFooter',
  components: {
    SocialLogos,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.footer
  display: flex
  justify-content: space-between
  align-items: center
  flex-shrink: 1
  height: 50px
  font-weight: bold
  background-color: $primary-color
  color: $secondary-font-color
  &__swap
    margin-left: 20px
    cursor: pointer
    &:hover
      color: $primary-color
      font-size: 18px
</style>

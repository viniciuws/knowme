<template>
  <div class="footer">
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
  justify-content: flex-end
  flex-shrink: 1
  height: 50px
  font-weight: bold
  background-color: $primary-color
  color: $secondary-font-color
</style>

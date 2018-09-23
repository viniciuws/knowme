<template>
  <div class="social-logos">
    <a :href="person.twitter" target="_blank">
      <img class="social-logos__image" src="../assets/images/twitter-logo.svg" alt="Twitter" title="Twitter"/>
    </a>
    <a :href="person.github" target="_blank">
      <img class="social-logos__image" src="../assets/images/github-logo.svg" alt="Github" title="Github"/>
    </a>
    <a :href="person.linkedin" target="_blank">
      <img class="social-logos__image" src="../assets/images/linkedin-logo.svg" alt="Linkedin" title="Linkedin"/>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SocialLogos',

  data() {
    return {
    };
  },
  
  computed: {
    ...mapGetters(['person']),
  },
};
</script>

<style scoped lang="sass">
@import '../styles/global.sass'

.social-logos
  display: flex
  justify-content: space-around
  align-items: center
  width: 15%
  &__image
    fill: white
    width: 35px
    height: 35px
    &:hover
      cursor: pointer
      fill: $secondary-color
</style>

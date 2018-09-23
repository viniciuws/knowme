<template>
  <div class="portfolio">
    <div class="portfolio__header">
      <div class="portfolio__title">
        Portfolio
      </div>
    </div>
    <div class="portfolio__body">
      <p> My projects</p>
      <div class="portfolio__projects">
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Portfolio',

  data: function () {
    return {
    };
  },

  computed: {
    ...mapGetters(['person']),
  },

};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'

.portfolio
  display: flex
  flex: 1
  padding: 10px
  flex-direction: column
  &__header
    display: flex
    justify-content: flex-start
    padding: 20px
    width: 100%
  &__title
    font-size: 36px
    color: $secondary-font-color
  &__body
    padding: 20px
    max-width: 45rem
    text-align: justify
    font-size: 22px
    & p
      color: $tertiary-font-color
  &__projects
    display: flex
    flex-direction: column
    +media-min-md()
      display: grid
      grid-template-columns: repeat(3, 33%)
</style>

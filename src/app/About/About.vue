<template>
  <div class="about">
    <div class="about__header">
      <div class="about__header_title">
        About {{ person.name}}
      </div>
    </div>
    <div class="about__body">
      <p>{{ person.fullSummary }}</p>
      <div class="about__body_subtitle">
        Experience
      </div>
        <p>{{ person.experience }}</p>
    </div>
  </div>
</template>

<script>
import PersonService from '../../models/Person/PersonService'

export default {
  name: 'About',

  data: function () {
    return {
      person: {},
    };
  },

  created() {
    PersonService.find().then(({ data }) => {
      this.person = data;
    });
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'

.about
  display: flex
  flex: 1
  padding: 10px
  flex-direction: column
  &__header
    display: flex
    justify-content: flex-start
    padding: 20px
    width: 100%
    &_title
      font-size: 36px
      color: $secondary-font-color
  &__body
    padding: 20px
    max-width: 45rem
    text-align: justify
    font-size: 22px
    &_subtitle
      font-weight: bold
      font-size: 28px
      color: $secondary-font-color
    & p
      color: $tertiary-font-color
</style>

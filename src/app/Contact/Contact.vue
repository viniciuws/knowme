<template>
  <div class="contact">
     <div class="contact__header">
      <div class="contact__header_title">
        Contact
      </div>
    </div>
    <div class="contact__body">
      Need help with your website?
      <p>{{ person.email }}</p>
    </div>
  </div>
</template>

<script>
import PersonService from '../../models/Person/PersonService';

export default {
  name: 'Contact',
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

.contact
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

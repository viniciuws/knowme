<template>
  <div class="details">
    <div class="details__action">
      <a href="#menu" class="details__show">&#9776;</a>
    </div>
    <UserAvatar/>
    {{ person }}
  </div>
</template>

<script>
import UserAvatar from '../../components/UserAvatar.vue';
import httpService from '../../models/Person/PersonService.js'

export default {
  name: 'Details',
  components: {
    UserAvatar,
  },
  data: function() {
    return {
      person: {}
    }
  },

  created() {
   this.person = httpService.find();
   console.log(this.person);
  }

};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.details
  display: flex
  flex-direction: column
  align-items: center
  height: 100%
  &__action
    width: 100%
    padding: 10px
  &__show
    left: 0
    background: rgba(0, 0, 0, .4)
    border-radius: 4px
    padding: .4em .6em
    text-decoration: none
    &:hover
      background-color: $secondary-color
</style>

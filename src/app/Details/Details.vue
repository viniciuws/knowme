<template>
  <div class="details">
    <UserAvatar class="details__avatar"/>
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
  &__avatar
    margin-top: 20px
</style>

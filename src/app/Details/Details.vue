<template>
  <div class="details">
    <UserAvatar/>NOME
  </div>
</template>

<script>
import UserAvatar from '../../components/UserAvatar.vue';

export default {
  name: 'Details',
  components: {
    UserAvatar,
  },
};
</script>

<style scoped lang="sass">
.details
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>

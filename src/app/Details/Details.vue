<template>
  <div class="details">
    <div class="details__action">
      <a href="#menu" class="details__show">&#9776;</a>
    </div>
    <UserAvatar/>
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
@import '../../styles/global.sass'
.details
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
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

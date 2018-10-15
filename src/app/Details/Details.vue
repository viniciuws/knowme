<template>
  <div class="details">
    <UserAvatar class="details__avatar"/>
    <router-link to="/about" class="details__name">{{ person.name }}</router-link>
    <div class="details__profession">{{ person.profession }}</div>
    <div class="details__summary">{{ person.summary }}</div>
  </div>
</template>

<script>
import UserAvatar from "../../components/UserAvatar.vue";
import { mapGetters } from "vuex";

export default {
  name: "Details",
  components: {
    UserAvatar
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["person"])
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
  overflow-y: scroll
  &__avatar
    margin-top: 20px
  &__name
    padding: 30px
    font-size: 26px
    text-decoration: none
    color: $primary-color-button
    &:hover
      cursor: pointer
      font-weight: bold
  &__profession
    padding: 0 30px 0 30px
    text-align: center
    font-size: 30px
    font-weight: bold
    color: $secondary-font-color
  &__summary
    padding: 30px
    font-size: 22px
    text-align: center
    color: $tertiary-font-color
</style>

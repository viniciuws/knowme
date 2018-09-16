<template>
  <article class="skill">
    <div class="skill__head">
      {{ title }}
    </div>
    <div class="skill__body">
      {{ description }} <span class="skill__more" :class="[ isActive ? 'skill__more_active': 'skill__more_deactive']"> {{ more }}</span>
    </div>
    <div class="skill__action" v-on:click="isActive = !isActive">
      <AppButton description="More..." />
    </div>
  </article>
</template>

<script>
import AppButton from '../../components/AppButton.vue'

export default {
  name: 'Skill',
  data() {
    return {
      isActive: false
    };
  },
  props: {
    title: String,
    description: String,
    more: String,
    rating: Number
  },
  components: {
    AppButton
  }
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.skill
  display: flex
  flex: shrink
  justify-content: flex-start
  flex-direction: column
  padding: 30px
  &__head
    color: $primary-font-color
    font-size: 20px
    font-weight: bold
    padding-bottom: 10px
  &__body
    color: $tertiary-font-color
  &__more
    &_active
      display: flex
    &_deactive
      display: none
  &__action
    display: flex
    justify-content: flex-end
</style>

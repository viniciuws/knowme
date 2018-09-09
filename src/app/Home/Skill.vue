<template>
  <article class="skill">
    <div class="skill__head">
      {{ title }}
    </div>
    <div class="skill__body">
      {{ description }}
    </div>
    <div class="skill__action">
      <AppButton description="More..."/>
    </div>
  </article>
</template>

<script>
import AppButton from '../../components/AppButton.vue'

export default {
  name: 'Skill',
  props: {
    title: String,
    description: String,
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
  justify-content: center
  flex-direction: column
  padding: 30px
  &__head
    color: $primary-font-color
    font-size: 20px
    font-weight: bold
    padding-bottom: 10px
  &__body
    color: $tertiary-font-color
  &__action
    display: flex
    justify-content: flex-end
</style>

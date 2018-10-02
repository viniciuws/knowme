<template>
  <div class="home">
    <div class="home__header">
      <div class="home__cubism">
        <div class="home__cubism_a"></div>
        <div class="home__cubism_b"></div>
        <div class="home__cubism_c_animate"></div>
        <div class="home__cubism_d"></div>
        <div class="home__cubism_e"></div>
      </div>
      <img class="home__world" src="../../assets/images/world.gif" alt="World" height="180" width="250">
    </div>
    <div class="home__title">SKILLS</div>
    <div class="home__skills">
      <Skill v-for="skill in skills" :key="skill.id" class="home-skills" :title="skill.name" :description="skill.description" :more="skill.more" :rating="skill.rating"/>
    </div>
  </div>
</template>

<script>
import Skill from './Skill.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  props: {
    msg: String,
  },
  components: {
    Skill,
  },
  data: function () {
    return {
    };
  },

  computed: {
    ...mapGetters(['skills']),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.home
  display: flex
  flex-direction: column
  flex: 1
  overflow: auto
    z-index: -100
  &__header
    display: flex
    justify-content: space-between
    width: 100%
    flex-shrink: 0
  &__cubism
    display: flex
    flex-direction: row
    height: 0; 
    z-index: -1000
    &_a
      border-right: 100px solid $secondary-light-color; 
      border-bottom: 50px solid transparent;
    &_b
      border-right: 150px solid $secondary-color; 
      border-bottom: 100px solid transparent;
    &_c
      border-left: 100px solid transparent; 
      border-right: 100px solid transparent; 
      border-top: 150px solid $secondary-dark-color; 
      &_animate
        animation: cubism 5s ease infinite
        position: relative
    &_d
      border-left: 150px solid $secondary-color; 
      border-bottom: 100px solid transparent; 
    &_e
      border-left: 100px solid $secondary-light-color; 
      border-bottom: 50px solid transparent;
  &__world
    animation: world 5s ease-in infinite alternate
    position: relative 
  &__title
    display: flex
    justify-content: center
    width: 100%
    padding-bottom: 10px
    color: $secondary-font-color
    font-size: 36px
    font-weight: bold
    flex-shrink: 0
  &__skills
    display: flex
    flex-direction: column
    +media-min-md()
      display: grid
      grid-template-columns: repeat(3, 33%)

@keyframes world
  0%
    right: 1%
  50%
    right: 10%
  100%
    right: 1%

@keyframes cubism
  0%
    border-left: 100px solid transparent; 
    border-right: 100px solid transparent; 
    border-top: 150px solid $secondary-dark-color; 
  50%
    border-left: 100px solid transparent; 
    border-right: 100px solid transparent; 
    border-top: 170px solid $secondary-dark-color; 
  100%
    border-left: 100px solid transparent; 
    border-right: 100px solid transparent; 
    border-top: 150px solid $secondary-dark-color; 
</style>

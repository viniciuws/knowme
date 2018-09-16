<template>
  <div class="home">
    <div class="home__header">
      <div class="home__cubism">
        <div class="home__cubism_a"></div>
        <div class="home__cubism_b"></div>
        <div class="home__cubism_c"></div>
        <div class="home__cubism_d"></div>
        <div class="home__cubism_e"></div>
      </div>
      <img src="https://cdn.dribbble.com/users/31752/screenshots/1528969/globe-dribbble-400x300_1_.gif" alt="World" height="180" width="250">
    </div>
    <div class="home__title">SKILLS</div>
    <div class="home__skills">
      <Skill v-for="skill in skills" :key="skill.skill" class="home-skills" :title="skill.skill" :description="skill.description" :more="skill.more" :rating="skill.rating"/>
    </div>
  </div>
</template>

<script>
import Skill from './Skill.vue';
import SkillsService from '../../models/Skills/SkillsService';

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
      skills: {},
    };
  },

  created() {
    SkillsService.find().then(({ data }) => {
      this.skills = data;
    });
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
  &__cubism
    display: flex
    flex-direction: row
    width: 0; 
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
    &_d
      border-left: 150px solid $secondary-color; 
      border-bottom: 100px solid transparent; 
    &_e
      border-left: 100px solid $secondary-light-color; 
      border-bottom: 50px solid transparent; 
  &__title
    display: flex
    justify-content: center
    width: 100%
    padding-bottom: 10px
    color: $secondary-font-color
    font-size: 36px
    font-weight: bold
  &__skills
    display: flex
    flex-direction: column
    +media-min-md()
      display: grid
      grid-template-columns: repeat(3, 33%)
</style>

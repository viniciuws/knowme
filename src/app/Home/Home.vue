<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header_triangle"></div>
      <img src="https://cdn.dribbble.com/users/31752/screenshots/1528969/globe-dribbble-400x300_1_.gif" alt="World" height="180" width="250">
    </div>
    <div class="home__title">SKILLS</div>
    <div class="home__skills">
      <Skill v-for="skill in skills" class="home-skills" :title="skill.skill" :description="skill.description" :rating="skill.rating"/>
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
    &_triangle
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 100px 400px 0 0;
      border-color: $secondary-color transparent transparent transparent;
  &__title
    display: flex
    justify-content: center
    width: 100%
    padding-bottom: 10px
    color: $secondary-font-color
    font-size: 36px
    font-weight: bold
  &__skills
    display: grid
    grid-template-columns: repeat(3, 33%)
    &_one
    &_two
    &_third
</style>

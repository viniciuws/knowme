<template>
  <div class="app">
    <section class="app__page">
      <AppHeader/>
      <transition name="slide-fade" mode="out-in">
        <router-view class="app__main"/>
      </transition>
      <AppFooter v-on:swap="swap"/>
    </section>
    <section class="app__details">
      <Details/>
    </section>
  </div>
</template>

<script>
import normalize from 'normalize.css';
import Home from './app/Home/Home.vue';
import AppHeader from './app/Layout/AppHeader.vue';
import Details from './app/Details/Details.vue';
import AppFooter from './app/Layout/AppFooter.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Home,
    AppHeader,
    AppFooter,
    Details,
  },
  data() {
    return {
      change: false,
      id: 0
    };
  },
  
  created() {
    this.setPerson(1);
  },

  methods: {
    swap: function () {
      this.id = this.change === false ? 0 : 1
      this.change = !this.change;
      this.setPerson(this.id);
    },
    ...mapActions(['setPerson'])
  },
};
</script>

<style scoped lang="sass">
@import 'styles/global.sass';
.app
  display: flex
  flex-direction: column
  +media-min-md()
    height: 100%
    flex-direction: row
  &__page
    display: flex
    flex-direction: column
    width: 100%
    +media-min-md()
      width: 70%
  &__main
    overflow: auto
  &__details
    width: 100%
    height: 100%
    box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.15);
    +media-min-md()
      width: 30%

.slide-fade-enter-active
  transition: all .3s ease
.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0
  
</style>

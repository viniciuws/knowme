<template>
  <div class="app">
    <section class="app__page">
      <AppHeader/>
      <router-view/>
      <AppFooter/>
    </section>
    <section class="app__details">
      <Details/>
    </section>
  </div>
</template>

<script>
import Home from './app/Home/Home.vue';
import AppHeader from './app/Layout/AppHeader.vue';
import Details from './app/Details/Details.vue';
import AppFooter from './app/Layout/AppFooter.vue';

export default {
  name: 'App',
  components: {
    Home,
    AppHeader,
    AppFooter,
    Details,
  },
};
</script>

<style scoped lang="sass">
@import 'styles/global.sass';
.app
  display: grid
  grid-template-columns: 100%
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin: -10px
  +media-min-md()
    grid-template-columns: 70% 30%
  &__page
    display: grid
    overflow: auto
    border-right: solid 4px $secondary-color
  &__details
    display: grid
    height: 500px
    align-items: center
    justify-content: center
</style>

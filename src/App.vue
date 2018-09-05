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
  display: flex
  flex-direction: row
  margin: -8px
  height: 100%
  &__page
    display: flex
    flex-direction: column
    overflow: auto
    width: 100%
    +media-min-md()
      width: 70%
  &__details
    width: 30%
    height: 100%
    border-left: solid 2px $secondary-color
</style>

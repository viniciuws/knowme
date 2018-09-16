<template>
  <div class="app">
    <section class="app__page">
      <AppHeader/>
      <router-view class="app__main"/>
      <AppFooter/>
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
import PersonService from './models/Person/PersonService';
import PersonEntity from './models/Person/PersonEntity';
import * as Actions from './store/Person/actions.js';

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
      person: new PersonEntity(),
    };
  },
  
  created() {
    PersonService.find().then(({ data }) => {
      Actions.setPerson('eae')
      console.log(data);
    });
  },

  // computed: {
  //   ...mapGetters(['person']),
  // },
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
</style>

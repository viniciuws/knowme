<template>
  <div class="layout">
    <section>
      <AppHeader/>
      <Home/>
    </section>
    <Details class="layout__details"/>
  </div>
</template>

<script>
import Home from '../Home/Home.vue';
import AppHeader from './AppHeader.vue';
import Details from '../Details/Details.vue';

export default {
  name: 'Layout',
  components: {
    Home,
    AppHeader,
    Details,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/global.sass'
.layout
  display: grid
  grid-template-columns: 100%
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin: -10px
  +media-min-md()
		grid-template-columns: 70% 30%
</style>

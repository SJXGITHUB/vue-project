<template>
  <home-header></home-header>
  <home-search></home-search>
  <home-adv></home-adv>
  <home-singing-list></home-singing-list>

</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSearch from './components/Search.vue'
import HomeAdv from './components/Adv.vue'
import HomeSingingList from './components/SingingList.vue'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components:{
    HomeHeader,
    HomeSearch,
    HomeAdv,
    HomeSingingList

  }
}
</script>

<style>

</style>

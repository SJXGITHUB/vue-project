<template>
  <home-search></home-search>
  <home-adv></home-adv>
  <home-relax></home-relax>

  <home-singing-list></home-singing-list>
  <home-music-list></home-music-list>
  <home-play-list></home-play-list>
</template>

<script>
import HomeSearch from './components/Search.vue'
import HomeAdv from './components/Adv.vue'
import HomeSingingList from './components/SingingList.vue'
import HomeRelax from './components/Relax.vue';
import HomeMusicList from './components/MusicList.vue';
import HomePlayList from './components/PlayList.vue';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components:{
    HomeSearch,
    HomeAdv,
    HomeRelax,

    HomeSingingList,
    HomeMusicList,
    HomePlayList,
  }
}
</script>

<style>

</style>

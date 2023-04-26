<template>
  <tea-swiper></tea-swiper>
<!--  <tea-scroll></tea-scroll>-->
  <tea-delivery></tea-delivery>
</template>

<script>
import TeaSwiper from './components/Swiper.vue'
import TeaScroll from './components/Scroll.vue'
import TeaDelivery from './components/Delivery.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Follow',
  components: {
    TeaSwiper,
    TeaDelivery,
    // TeaScroll
  },

};
</script>

<style>

</style>

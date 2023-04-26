<!--
    :scrollbar="{ draggable: false }" --下方进度条
    navigation 左右箭头
    :pagination="{ clickable: true }" 下方小点

-->

<template>
  <div class="my-5">
  <swiper
    :loop="true"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
  >

    <swiper-slide v-for="(item ,index)  of swiperList" :key="index">
     <div class="py-10  w-full bg-purple-300">{{ item }}</div>
    </swiper-slide>

  </swiper>
  </div>
</template>

<script>
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { height } from 'tailwindcss/lib/plugins';

export default {
  name: 'TeaSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
data(){
    return{
      swiperList:['11','222','333','444']
    }
},
  setup() {
    return {
      modules: [Autoplay,Navigation, Pagination, Scrollbar, A11y],
    };
  },


};
</script>

<style scoped>


</style>

<!--
    :scrollbar="{ draggable: false }" --下方进度条
    navigation 左右箭头
    :pagination="{ clickable: true }" 下方小点

-->

<template>
  <div class="my-5  ">
    <swiper
      :loop="true"
      :autoplay="true"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      class=""
    >
      <swiper-slide>
        <div class="w-full  bg-yellow-200 p-10 swiper-autoheight">Slide 1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full  bg-yellow-200 p-10 swiper-autoheight">Slide 2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full  bg-yellow-200 p-10 swiper-autoheight">Slide 3</div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full  bg-yellow-200 p-10 swiper-autoheight">Slide 4</div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-full  bg-yellow-200 p-10 swiper-autoheight">Slide 5</div>
      </swiper-slide>

    </swiper>

  </div>
</template>

<script>
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: 'TeaSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      spaceBetween: 30,
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    // const onSlideChange = () => {
    //   console.log('slide change');
    // };

    return {
      onSwiper,
      // onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },


};
</script>

<style scoped>


</style>

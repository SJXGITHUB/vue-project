<template>
  <div class="my-5 pb-2 bg-gray-100 rounded-lg ">
    <div class="flex ">
      <p class="text-lg font-bold mb-1 p-3 ">为你推荐</p>
      <p class="text-base  mb-1 p-3">More</p>
  </div>
    <div class="  px-3">
      <div v-for="(item,index) of songList" :key="index" class="">
        <div class="text-left flex mb-5 justify-between items-center">
          <div class="flex items-center">
          <img :src="item.img" class="w-20 h-20 rounded-lg " />
          <div class="ml-3  ">
            <p class="my-2">{{ item.name }}</p>
            <div class="flex ">
              <p class="mr-5">{{ item.singer }}</p>
              <p class="">{{ item.player }}</p>
            </div>
          </div>
          </div>
          <div class="iconfont  ">&#xe61f;</div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeMusicList',
  data() {
    return {
      songList: [
        {
          img: 'https://img2.baidu.com/it/u=2835933203,678591079&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          name:'音乐1',
          singer:'111',
          player:'37.8万'
        },
        {
          img: 'https://img0.baidu.com/it/u=681669450,2764612700&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888',
          name: '音乐2',
          singer:'111',
          player:'37.8万'
        },
        {
          img: 'https://img1.baidu.com/it/u=629368036,493979434&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          name: '音乐3',
          singer:'111',
          player:'37.8万'
        },
        {
          img: 'https://img1.baidu.com/it/u=22231697,2417591759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=332',
          name: '音乐4',
          singer:'111',
          player:'37.8万'
        },
        {
          img: 'https://img2.baidu.com/it/u=2697550206,419822212&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
          name: '音乐5',
          singer:'111',
          player:'37.8万'
        },
      ],
    };
  },

};
</script>

<style></style>

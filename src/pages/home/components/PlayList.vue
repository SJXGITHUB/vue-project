<template>
  <div class="fixed bottom-0 left-0 w-full rounded-t-lg bg-gray-50 ">
    <div class=" p-5 ">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <p class="mr-5 text-2xl ">{{this.currsong}}</p>
          <p>{{this.singer}}</p>
        </div>

        <div class="iconfont " @click="handleClick">&#xe607;</div>
      </div>
    </div>
    <div v-show="visible" class="fixed bottom-16 w-full  bg-red-200 p-5 rounded-t-lg">
      <div class="">
        <p class="text-lg font-bold mb-2">播放全部</p>
        <div v-for="(item,index) of songList" :key="index">
          <div class="text-left flex  justify-between items-center" @click="handleSongClick(item)">
            <div class="flex items-center my-1">
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


  </div>
</template>

<script>
export default {
  name: 'HomePlayList',
  data() {
    return {
      visible:false,
      currsong:'Hello',
      singer:'Dall',
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
    }
  },
  methods: {
    handleClick() {
      this.visible=!this.visible

    },
    handleSongClick(item){
      // console.log(item.name);
      this.currsong=item.name
      this.singer=item.singer
      this.visible=false

    }
  },
};
</script>

<template>
  <div class="my-5 bg-gray-100 rounded-lg scroll-container">
    <p class=" text-lg font-bold mb-1 p-3">播单推荐</p>
    <div class=" flex  flex-nowrap items-center px-3 scroll-content">
      <div v-for="(item,index) of singingList" :key="index" >
        <div class="text-center mx-5 ">
          <img :src="item.img" class="w-20 h-20 rounded-lg  " />
          <p class="my-2">{{ item.song }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSingingList',
  data() {
    return {
      singingList: [
        {
          img: 'https://img2.baidu.com/it/u=2835933203,678591079&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          song: '音乐1',
        },
        {
          img: 'https://img0.baidu.com/it/u=681669450,2764612700&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888',
          song: '音乐2',
        },
        {
          img: 'https://img1.baidu.com/it/u=629368036,493979434&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          song: '音乐3',
        },
        {
          img: 'https://img1.baidu.com/it/u=22231697,2417591759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=332',
          song: '音乐4',
        },
        {
          img: 'https://img2.baidu.com/it/u=2697550206,419822212&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
          song: '音乐5',
        },
      ],
    };
  },
  methods:{
    mounted() {
      const scrollContent = this.$el.querySelector('.scroll-content');
      const scrollContainer = this.$el.querySelector('.scroll-container');
      scrollContainer.style.width = scrollContent.offsetWidth + 'px';
    }
  }

};
</script>

<style>
.scroll-container {
  overflow-x: scroll;
  white-space: nowrap; /* 防止内容换行 */
}

.scroll-content {
  width: 600px; /* 滚动内容的宽度 */
}

</style>

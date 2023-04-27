<template>
  <div class=" flex ">
        <ul class=" h-full float-left overflow-auto border-r w-1/4 ">
          <li v-for="(item, index) in List"
              :key="index" class="py-3 text-sm"
              @click="handleClick(index)"
          >
            <p v-if="index===curIndex "
               class="text-base  border-l-4 border-red-700 px-3 text-red-700"
            >{{ item.modTitle }}</p>
            <p v-else @click="handleClick(index)"
               class="text-gray-600 px-3">
              {{ item.modTitle }}</p>

          </li>
        </ul>
        <div class="float-right w-full text-center">
          <div class=" h-22 m-3">
            <img :src="banner" class="  rounded-md">
          </div>
          <div> —— {{ this.modTitle }}分类 ——</div>
          <div class="flex mx-5 flex-wrap ">
              <div v-for="(item,index) of modCon" :key="index" class=" w-1/3">
                <div class="w-20 h-20 ">
                  <img :src="item.pic" class="  rounded-md">
                  <p>{{item.title}}</p>
                </div>



            </div>
          </div>
        </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ClassifyList',
  methods: {
    handleClick(index) {
      this.curIndex = index;
      this.banner = this.List[index].banner;
      this.modTitle=this.List[index].modTitle;
      this.modCon=this.List[index].modCon;


    },
    getInfo() {
      axios.get('/static/otherGoods.json')
        .then(this.getWeekInfoSucc);
    },
    getWeekInfoSucc(res) {
      res = res.data;
      console.log(res);
      this.List = res;
      this.modCon = this.List[0].modCon
      this.modTitle = this.List[0].modTitle
      this.banner = this.List[0].banner

    },
  },
  mounted() {
    this.getInfo();

  },
  data() {
    return {
      curIndex: 0,
      modTitle:'',
      modCon: [],
      banner: '',
      List: [],
    };
  },
};

</script>

<style></style>

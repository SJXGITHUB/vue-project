<template>
  <div class="absolute left-0 top-0 w-full
              flex items-center justify-between py-2 px-5">
   <div v-for="(item ,index) of menu" :key="index" class="">
     <p  v-if="index===defaulIndex"
         class= 'text-lg font-bold border-b-4 border-red-600'
         @click="handleIndex(index)"
           >{{item}} </p>
     <p v-else  @click="handleIndex(index)" class="text-gray-600"> {{item}}</p>

   </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      defaulIndex:1,
      menu: ['关注', '推荐', '声音广场', '亲子', '情感'],
    };

  },
  methods:{
    handleIndex(index){
      this.defaulIndex = index
      console.log(index);
    }
  }
};
</script>

<style></style>

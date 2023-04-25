<template>
  <div class="my-5 w-full ">
    <div class="flex ">
      <div
        v-for="( item,index) of List"
        :key="index"
        class="w-1/3 mx-1 bg-red-100 rounded-lg">
        <div class="w-10 h-10 bg-yellow-200 mx-auto my-5"></div>
        <div class="m-2">
          <p class="text-lg font-bold">{{item.name}}</p>
          <p class="text-gray-500">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeRelax',
  data( ) {
    return{
      List:[
        {
          name:'排行榜',
          content:'收听热榜节目'
        },
        {
          name:'排行榜',
          content:'收听热榜节目'
        },
        {
          name:'排行榜',
          content:'收听热榜节目'
        },
      ]
    }
  }

};
</script>

<style></style>

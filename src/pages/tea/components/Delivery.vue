<template>
  <div>
    <div class="bg-yellow-100  rounded-lg py-5 -top-2 shadow-md">
      <div class="flex justify-between items-center ">
        <div class="text-center w-1/2 border-r">
          <div class="w-10 h-10 bg-green-100 mx-auto"></div>
          <p class="font-bold my-1">门店自取</p>
          <p class="text-xs">下单免排队</p>
        </div>
        <div class="text-center w-1/2 border-l">
          <div class="w-10 h-10 bg-green-100 mx-auto"></div>
          <p class="font-bold my-1">外卖</p>
          <p class="text-xs">无需接触 送喜到家</p>

        </div>

      </div>

    </div>
    <div class="flex justify-between mt-2 ">
      <div class="bg-gray-200 rounded-lg p-4 text-center">
        <p class="text-sm font-bold">喜茶百货</p>
        <p class="text-xs">新装气泡水畅饮更尽兴</p>
      </div>
      <div class="bg-gray-200 rounded-lg p-4 text-center">
        <p class="text-sm font-bold">阿喜团餐</p>
        <p class="text-xs">最高享9折火热预定中</p>

      </div>
    </div>

    <div class="mt-2">
      <div class="flex items-center mb-2">
        <p>百货上新</p>
        <p class="ml-2 text-xs text-gray-300">NEW ARRIVALS</p>
      </div>
      <div>
        <div class="h-20 bg-purple-300 rounded-lg border-2"></div>
      </div>
    </div>
    <div class="flex my-5 justify-between">
      <div class="w-5/6 border-r">
        <p class="font-bold">我的积分 22</p>
        <p class="text-gray-500 text-sm">可兑换喜茶券和丰富灵感周边</p>
      </div>
      <div class="">
        <div class="w-5 h-5 bg-green-100 mx-auto"></div>
        <p class="text-gray-500 text-sm">会员码</p>
      </div>

    </div>

    <div class="h-0.5 bg-gray-200 shadow-md"></div>

    <div class="my-3">
      <div class="flex justify-between">
        <p class="text-sm font-bold">开通礼包</p>
        <p class="text-sm font-bold">更多</p>
      </div>
      <div class="flex flex-wrap my-2 text-center">
        <div v-for="(item,index) of cupon" :key="index" class="w-1/3 my-1">
          <div class="w-5 h-5 bg-purple-300 mx-auto"></div>
          <p class="my-1.5 text-xs font-500">{{ item }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaDelivery',
  data() {
    return {
      cupon: ['星球赠饮券', '买一送一券', '买二赠一券', '喜茶轻食券', '优先券', '免运费券'],
    };
  },

};
</script>

<style>

</style>

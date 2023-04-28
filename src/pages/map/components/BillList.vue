<template>
  <div class="border-2 border-black rounded p-3" v-show="bills.length">
    <h1 class="font-bold text-center mb-3 ">账单列表</h1>
    <div class="">
      <div class="flex justify-between border-b-2 pb-2">
        <p class="">日期</p>
        <p class="">类型</p>
        <p class="">金额</p>
        <p class="">备注</p>
        <p class="">操作</p>
      </div>
      <div v-for="(bill, index) in bills" :key="index"
           class="flex justify-between items-center my-3">
        <p class=" text-sm">{{ bill.date }}</p>
        <p class=" text-sm">{{ bill.type }}</p>
        <p class="text-sm">{{ bill.amount }}</p>
        <p class="text-sm">{{ bill.remark }}</p>
        <div class="  text-sm">
          <button @click="deleteBill(index)" class=" bg-red-700 p-3 text-white">删除</button>
          <button @click="editBill(index)" class=" bg-green-700 p-3 text-white">编辑</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'BillList',
  props: {
    bills: Array,
    deleteBill: Function,
    editBill: Function
  }
}
</script>

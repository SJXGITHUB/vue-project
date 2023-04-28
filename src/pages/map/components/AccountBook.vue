<template>
  <div>
    <h1 class="text-center text-lg font-bold my-2">记账本</h1>
    <form @submit.prevent="addBill">
      <label>
        <div class="">
          <p class="my-3 font-bold">日期：</p>
          <input v-model="newBill.date" type="date" class="w-full p-2 border-2 rounded-md">
        </div>

      </label>
      <label>
        <div >
        <p class="my-3 font-bold ">类型：</p>


       <select v-model="newBill.type" class="w-full p-2 border-2 rounded-md">
          <option value="收入" class="">收入</option>
          <option value="支出">支出</option>
        </select>
        </div>
      </label>
      <label>
        <div>
          <p class="my-3 font-bold ">
            金额：
          </p>
          <input v-model="newBill.amount" type="number" class="w-full p-2 border-2 rounded-md">
        </div>

      </label>
      <label>

        <p class="my-3 font-bold ">
         备注：
        </p>
        <input v-model="newBill.remark" type="text" class="w-full p-2 border-2 rounded-md">
      </label>
      <div class="text-center">
        <button type="submit" class="m-5 w-1/2 py-3 text-white  bg-blue-500">添加</button>

      </div>
    </form>
    <bill-list :bills="bills" :deleteBill="deleteBill" :editBill="editBill"/>
  </div>
</template>

<script>

import BillList from '@/pages/map/components/BillList.vue';

export default {
  name:'AccountBook',
  components: {
    BillList
  },

  data() {
    return {
      bills: [],
      newBill: {
        date: '',
        type: '',
        amount: '',
        remark: ''
      }
    }
  },

  methods: {
    addBill() {
      if (this.newBill.date !== '' && this.newBill.type !== '' && this.newBill.amount !== '') {
        this.bills.push({
          date: this.newBill.date,
          type: this.newBill.type,
          amount: this.newBill.amount,
          remark: this.newBill.remark
        })
        this.newBill.date = ''
        this.newBill.type = ''
        this.newBill.amount = ''
        this.newBill.remark = ''
      }
    },

    deleteBill(index) {
      this.bills.splice(index, 1)
    },

    editBill(index) {
      const bill = this.bills[index]
      const newBill = {
        date: bill.date,
        type: bill.type,
        amount: bill.amount,
        remark: bill.remark
      }
      const date = prompt('请输入新的日期', bill.date)
      if (date !== null && date !== '') {
        newBill.date = date
      }
      const type = prompt('请输入新的类型（收入或支出）', bill.type)
      if (type !== null && type !== '') {
        newBill.type = type
      }
      const amount = prompt('请输入新的金额', bill.amount)
      if (amount !== null && amount !== '') {
        newBill.amount = amount
      }
      const remark = prompt('请输入新的备注', bill.remark)
      if (remark !==null) {
        newBill.remark = remark
      }
      this.bills.splice(index, 1, newBill)
    }
  }
}
</script>

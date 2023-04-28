<template>
  <div class="my-5 border border-black p-3">
    <h1 class="text-lg font-bold">备忘录 : 记录美好一天</h1>
    <form @submit.prevent="addMemo">
      <div class="">
        <div class="">
          <p class="my-1 font-bold">内容：</p>
          <input v-model="newMemo" type="text" class="bg-green-200 p-2 w-full rounded-md border-2 border-green-500">
          <p class="my-1 font-bold">日期：</p>
          <input v-model="time" type="date" class="bg-green-200 p-2 w-full rounded-md border-2 border-green-500">
        </div>
        <div class="text-center">
          <button type="submit" class="rounded-md bg-blue-300  px-5 py-2 w-1/2 my-5 text-white">添加</button>
        </div>

      </div>

    </form>
    <memo-list :memos="memos" :deleteMemo="deleteMemo" :editMemo="editMemo" />
  </div>
</template>

<script>

import MemoList from '@/pages/memo/components/MemoList.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Memo',
  components: {
    MemoList,
  },

  data() {
    return {
      memos: [],
      newMemo: '',
      time: '',
    };
  },

  methods: {
    addMemo() {
      if (this.newMemo.trim() !== '' && this.time.trim() !== '') {
        this.memos.push({content:this.newMemo.trim(),time:this.time.trim()});
        this.newMemo = '';
        this.time = '';

      }

    },

    deleteMemo(index) {
      this.memos.splice(index, 1);
    },

    editMemo(index) {
      const newMemo = prompt('请输入新的备忘录内容', this.memos[index].content);
      const time = prompt('请输入新的备忘录内容', this.memos[index].time);

      if (newMemo !== null && newMemo.trim() !== '') {
        this.memos.splice(index, 1, newMemo.trim(),time.trim());
      }
    },
  },
};
</script>

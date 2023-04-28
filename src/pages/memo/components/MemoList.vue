<template>
  <div class="my-2 ">
    <h2 class="text-center font-bold mb-2">备忘录列表</h2>
    <div class="flex justify-between text-center border-b pb-2 border-black">
      <p>内容</p>
      <p>时间</p>
      <p>操作</p>

    </div>
    <ul>
      <li v-for="(memo, index) in memos" :key="index" class="border-b py-2">
        <div class="flex justify-between items-center">
          <p class="font-bold">{{ memo.content }}</p>
          <p class="font-bold">{{ memo.time }}</p>

          <div class="float-right">
            <button @click="deleteMemo(index)" class="bg-red-400 px-3 py-1 text-white">删除</button>
            <button @click="editMemo(index)" class="bg-blue-400 px-3 py-1 text-white ml-2">编辑</button>
          </div>

        </div>


      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    memos: Array,
    deleteMemo: Function,
    editMemo: Function
  }
}
</script>

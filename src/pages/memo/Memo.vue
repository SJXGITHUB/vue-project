<template>
  <div class="w-full h-full border-2 border-black my-4">
    <div class="p-2">
      <p class="my-2 font-bold text-xl">备忘录</p>
      <div>
        <p>记事:</p>
        <div class=" border-2 flex items-center mt-2 ">
          <input
            type="text"
            required
            v-model="note"
            class="w-full border-none p-1"
          />
          <span
            class="absolute right-2"
            v-show="note"
            @click="clearInput">X</span>
        </div>
        <!--        <VDatePicker v-model='date'  mode="date" is24hr  />-->
      </div>
      <div class="my-2">
        <p>日期:</p>
        <div class=" border-2 flex items-center mt-2 ">
          <input
            type="text"
            required
            v-model="date"
            class="w-full border-none p-1"
          />

        </div>

        <!--        <VDatePicker v-model='date'  mode="date" is24hr  />-->
      </div>
      <button class="bg-purple-300 px-5 py-2" @click="handleSubmit">提交</button>
    </div>

    <div v-for="(item,index) of list" :key="index" class="flex justify-between">

      <div>
        <p>{{ item.note }}</p>
        <p>{{ item.date }}</p>
      </div>

      <div>
        <button class="bg-purple-300 px-5 py-2" @click="handleEdit">编辑</button>
        <button class="bg-purple-300 px-5 py-2" @click="handleDelete(index)">删除</button>

      </div>
      <div v-show="showEdit" class=" absolute w-full  bg-green-100 p-5 border-2 rounded-lg">
        <p>事件:</p>
        <input
          type="text"
          required
          v-model="editNote"
          class="w-full border-2 p-1"
          :placeholder="editNote"
        />
        <p>日期:</p>
        <input
          type="text"
          required
          v-model="editDate"
          class="w-full border-none p-1"
          :placeholder="editDate"
        />
        <div>


        <button class="bg-purple-300 px-5 py-2" @click="handleOk(index)">确定</button>

        <button class="bg-purple-300 px-5 py-2" @click="handleDelete(index)">删除</button>
        <button class="bg-purple-300 px-5 py-2" @click="handleCance">取消</button>
        </div>
      </div>


    </div>

  </div>
</template>

<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Memo',
  data() {
    return {
      note: '',
      date: '',
      list: [],
      showEdit: false,
      editNote: '',
      editDate: '',

    };

  },

  methods: {

    clearInput() {
      this.note = '';
    },
    handleSubmit() {
      this.list.push({ note: this.note, date: this.date });
      this.note = '',
        this.date = '';

    },
    handleDelete(index) {
      this.list.splice(index, 1);
      this.showEdit = false;


    },
    handleEdit(index) {
      this.showEdit = true;
      // this.editNote = this.list[index].note,
      //   this.editDate = this.list[index].date;
      // console.log(this.editDate,this.editNote);

    },
    handleOk(index) {
      this.list[index].note = this.editNote;
      this.list[index].date = this.editDate;
      this.showEdit = false;

    },
    handleCance(){
      this.showEdit=false
    }
  },
};
</script>

<style>

</style>

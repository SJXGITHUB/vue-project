<template>
  <div class="absolute left-0 top-0 w-full
              flex items-center justify-between py-2 px-5 bg-white">
    <div v-for="(item ,index) of menu" :key="index" class="">
      <router-link :to="item.route">
        <p v-if="index===defaulIndex"
           class="text-lg font-bold border-b-4 border-red-600"
           @click="handleIndex(index)"
           :ref="item.name"
        >{{ item.name }} </p>
        <p v-else @click="handleIndex(index)" class="text-gray-600" :ref="item.name"> {{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',

  data() {
    return {
      defaulIndex: 0,
      menu: [
        {
          name: '音乐',
          route: '/',
        },
        {
          name: '喜茶',
          route: '/tea',
        },
        {
          name: '声音广场',
          route: '/tea',
        },
        {
          name: '亲子',
          route: '/tea',
        },
        {
          name: '情感',
          route: '/tea',
        },

      ],
    };

  },
  methods: {
    handleIndex(index) {
      this.defaulIndex = index;
      // console.log(index);
      this.$emit('change',this.menu[index].name );
      // console.log(this.menu[index].name);

    },
  },
};
</script>

<style></style>

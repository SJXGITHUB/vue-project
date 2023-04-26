<template>
  <div class="scroll-container">
    <div class="scroll-content">
      <p>sdsdas</p>
      <p>sdsdas</p>

    </div>
  </div>
</template>

<script>
export default {
  name:'TeaScroll',
  methods:{
  mounted() {
    const scrollContent = this.$el.querySelector('.scroll-content');
    const scrollContainer = this.$el.querySelector('.scroll-container');
    scrollContainer.style.width = scrollContent.offsetWidth + 'px';
  }
  }
}

</script>

<style>
.scroll-container {
  overflow-x: scroll;
  white-space: nowrap; /* 防止内容换行 */
  padding: 10px 0px;
}

.scroll-content {
  width: 500px; /* 滚动内容的宽度 */
}
</style>

<template>
  <div class="scroll-container">
    <div class="scroll-content">
      <p>sdsdas</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'FollowScroll',
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
}

.scroll-content {
  width: 1000px; /* 滚动内容的宽度 */
}
</style>

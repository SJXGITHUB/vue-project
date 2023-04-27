<template>
  <classify-search></classify-search>
  <classify-list></classify-list>
</template>

<script>
import ClassifySearch from './components/Search.vue'
import ClassifyList from './components/List.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Classify',
  components:{
    ClassifySearch,
    ClassifyList
  }
}

</script>

<style></style>

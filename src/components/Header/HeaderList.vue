<template>
  <div class="item-container">
    <header-item v-for="item in items" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import HeaderItem from "@/components/Header/HeaderItem";
import {mapState} from 'vuex'

export default {
  name: "HeaderList",
  components: {HeaderItem},
  computed: {
    ...mapState({
      items: state => state.layout.headerItems
    })
  }
}
</script>

<style scoped>
.item-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
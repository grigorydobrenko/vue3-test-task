<template>
  <div>
    <main-item v-for="item in items" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import MainItem from "@/components/Main/MainItem";

export default {
  name: "MainContent",
  components: {MainItem},
  computed: {
    ...mapState({
      items: state => state.layout.mainItems
    })
  },

}
</script>


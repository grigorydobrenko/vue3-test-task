<template>
  <div class="item-container">
    <reports-svg v-if="item.logo === 'reports'"/>
    <employees-svg v-if="item.logo === 'employees'"/>
    <groups-svg v-if="item.logo === 'groups'"/>
    <div class="item-description">{{ item.description }}</div>
    <div class="item-quantity-count">{{ item.count }}</div>
  </div>
</template>

<script>

import ReportsSvg from "@/components/SVG/ReportsSvg";
import GroupsSvg from "@/components/SVG/GroupsSvg";
import EmployeesSvg from "@/components/SVG/EmployeesSvg";

export default {
  name: "HeaderItem",
  components: {EmployeesSvg, GroupsSvg, ReportsSvg},
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

.item-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 50px;
}

.item-description {
  margin-left: 10px;
  width: 130px;
}

.item-quantity-count {
  margin-left: 25px;
  font-weight: 700;
}
</style>
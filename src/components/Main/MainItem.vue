<template>
  <div class="item-container">
    <div class="item-header">
      <ui-checkbox :checked="this.checked" @update:model-value="toggleCheckBox"/>
      <div class="item-title">{{ item.title }}</div>
      <ui-button class="item-button">Перейти</ui-button>
    </div>
    <div class="item-description">{{ item.description }}</div>
  </div>
</template>

<script>

export default {
  name: "MainItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    toggleCheckBox() {
      this.checked = !this.checked
    }
  }
}
</script>

<style scoped>

.item-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.item-header {
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 18px;
  border-top: 1px solid #E5E4E2;
  border-bottom: 1px solid #E5E4E2;
  margin-bottom: 10px;
}

.item-title {
  margin-left: 10px;
}

.item-button {
  margin-left: auto;
}

.item-description {
  margin-left: 20px;
}

</style>
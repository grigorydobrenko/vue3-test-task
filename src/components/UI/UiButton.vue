<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UiButton'
}
</script>

<style scoped>

.btn {
  padding: 10px 15px;
  background: #1ac90a;
  color: #ffffff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #079f09;
}

</style>
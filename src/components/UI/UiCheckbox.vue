<template>
  <div class="checkbox">
    <div
        class="checkbox-custom-input-wrapper"
        :class="{'checkbox-custom-input-wrapper--checked': checked}"
    >
      <input
          class="checkbox-hidden-input"
          type="checkbox"
          :checked="checked"
          @input="onInput"
      >
      <span
          v-if="checked"
          class="checkbox-custom-input"
          :class="{'checkbox-custom-input--checked': checked}"
      >
          &#x2713; <!-- tickmark -->
        </span>
    </div>
    <label
        class="label"
        :for="id"
    >
      <slot/>
    </label>
  </div>
</template>

<script>
export default {
  name: "UiCheckbox",
  props: {
    checked: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onInput() {
      this.$emit('update:modelValue');
    },
  }

}
</script>

<style scoped>

.checkbox {
  display: flex;
}

.checkbox-custom-input-wrapper {
  position: relative;
  border: 2px solid #1ac90a;
  height: 20px;
  width: 20px;
}

.checkbox-custom-input-wrapper--checked {
  border-color: #1ac90a;
}

.checkbox-custom-input {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: blue;
  color: green;
  font-weight: 400;
}

.checkbox-custom-input--checked {
  background-color: #ffffff;
}

.checkbox-hidden-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 0;
}

.label {
  cursor: inherit;
  margin-left: 8px;
}
</style>
<template>
  <label v-bem>
    <slot></slot>
    <input v-bem:input type="checkbox" :checked="checked" @input="$emit('input')">
  </label>
</template>

<script>
import _prop from 'vue-types';

export default {
  name: "BaseCheckbox",
  props: {
    checked: _prop.bool.def(false)
  },
}
</script>

<style src="./base-checkbox.scss" lang="scss"></style>

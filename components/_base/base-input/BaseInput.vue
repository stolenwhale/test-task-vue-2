<template>
  <input v-model="cModel" v-bem type="text" :placeholder="placeholder">
</template>

<script>
import _prop from 'vue-types';

export default {
  name: "BaseInput",
  props: {
    placeholder: _prop.string.def(''),
    value: _prop.oneOfType([String, Number]),
  },
  emits: ['input'],
  computed: {
    cModel: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    }
  }
}
</script>


<style src="./base-input.scss" lang="scss"></style>


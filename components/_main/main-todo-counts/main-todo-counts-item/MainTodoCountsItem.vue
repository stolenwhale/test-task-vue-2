<template>
  <div v-bem>
    <div v-bem:count>
      {{ count }} tasks
    </div>
    <div v-bem:title>
      {{ title }}
    </div>
    <div v-bem:progress>
      <div v-bem:progress-bar="{color}" :style="styleWidth"></div>
    </div>
  </div>
</template>

<script>
import _prop from 'vue-types';

export default {
  name: "MainTodoCountsItem",
  props: {
    count: _prop.integer.required,
    title: _prop.string.required,
    total: _prop.integer.required,
    color: _prop.string.required,
  },
  computed: {
    styleWidth() {
      return {
        width: `${(100 * this.count / this.total)}%`
      }
    }
  }
}
</script>

<style src="./main-todo-counts-item.scss" lang="scss"></style>

<template>
  <div v-bem>
    <MainTodoCountsItem v-bem:item :count="countCompleted" title="Completed" color="primary" :total="countTotal" />
    <MainTodoCountsItem v-bem:item :count="countTotal - countCompleted" title="To be finished" color="secondary" :total="countTotal" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import MainTodoCountsItem from "./main-todo-counts-item/MainTodoCountsItem.vue";

export default {
  name: "MainTodoCounts",
  components: {
    MainTodoCountsItem
  },
  computed: {
    ...mapGetters('todo', {
      countTotal: 'countTotal',
      countCompleted: 'countCompleted',
    })
  },
}
</script>

<style src="./main-todo-counts.scss" lang="scss"></style>

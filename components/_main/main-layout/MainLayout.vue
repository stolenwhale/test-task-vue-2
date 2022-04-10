<!-- Please remove this file from your project -->
<template>
  <div v-bem>
    <div v-bem:inner>
      <div v-bem:inner-block>
        <img v-bem:image src="./images/todo.svg" alt="Today I need to">

        <h1 v-bem:title>Today I need to</h1>

        <main-todo-form v-bem:form/>
        <main-todo-list v-bem:list/>
      </div>


      <div v-bem:inner-block.bottom>
        <div v-if="isTodoEmpty" v-bem:empty>
          <svg-icon v-bem:empty-icon name="icons/check-round"/>
          Congrats, you have no more tasks to do
        </div>

        <template v-else>
          <main-todo-counts v-bem:counts/>
          <main-todo-controls v-bem:controls/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import MainTodoForm from "~/components/_main/main-todo-form/MainTodoForm.vue";
import MainTodoList from "~/components/_main/main-todo-list/MainTodoList.vue";
import MainTodoCounts from "~/components/_main/main-todo-counts/MainTodoCounts.vue";
import MainTodoControls from "~/components/_main/main-todo-controls/MainTodoControls";

export default {
  name: 'MainLayout',
  components: {
    MainTodoForm,
    MainTodoList,
    MainTodoCounts,
    MainTodoControls,
  },
  computed: {
    ...mapGetters('todo', {isTodoEmpty: 'isTodoEmpty'})
  },
  created() {
    this.$store.dispatch('todo/init');
  }
}
</script>

<style src="./main-layout.scss" lang="scss"></style>

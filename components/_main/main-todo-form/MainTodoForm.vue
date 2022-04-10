<template>
  <form v-bem @submit="addTodo">
    <base-input v-bem:input :value="query" placeholder="Add new todo..." @input="input"/>
    <fade-transition>
      <base-button
        v-show="isButtonShown"
        v-bem:button
        type="submit"
        variant="primary"
      >
        Submit
      </base-button>
    </fade-transition>
  </form>
</template>

<script>

import {FadeTransition} from 'vue2-transitions';
import BaseInput from "~/components/_base/base-input/BaseInput.vue";
import BaseButton from "~/components/_base/base-button/BaseButton.vue";

export default {
  name: "MainTodoForm",
  components: {BaseInput, BaseButton, FadeTransition},
  data() {
    return {
      query: '',
      isButtonShown: false
    }
  },
  computed: {},
  methods: {
    input(e) {
      this.query = e;
      this.isButtonShown = !!this.query.length;
    },
    addTodo(e) {
      e.preventDefault();

      if(!this.query.length) {
        return;
      }

      this.$store.dispatch('todo/addToList', this.query);
      this.query = '';
      this.isButtonShown = false;
    }
  }
}
</script>

<style src="./main-todo-form.scss" lang="scss"></style>

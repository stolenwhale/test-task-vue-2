<template>
  <div v-bem>
    <div v-bem:info>
      <div v-bem:handle>
        <svg-icon v-bem:handle-icon name="icons/handle"/>
      </div>
      <base-checkbox v-bem:checkbox :checked="completed" @input="setComplete"/>
      <input v-bem:text="{completed, edit: editMode}" :readonly="!editMode" type="text" :value="text" @change="edit">
    </div>
    <div v-bem:controls>
      <button v-bem:controls-button.edit="{active: editMode}" @click="editMode = !editMode">
        <svg-icon v-bem:controls-icon.edit name="icons/pencil"/>
      </button>
      <button v-bem:controls-button.remove @click="remove">
        <svg-icon v-bem:controls-icon.remove name="icons/basket"/>
      </button>
    </div>
  </div>
</template>

<script>
import _prop from 'vue-types';
import BaseCheckbox from "~/components/_base/base-checkbox/BaseCheckbox.vue";


export default {
  name: "MainTodoListItem",
  components: {BaseCheckbox},
  props: {
    id: _prop.integer.required,
    text: _prop.string.required,
    completed: _prop.bool.required
  },
  data() {
    return {
      editMode: false
    }
  },
  methods: {
    setComplete() {
      this.$store.dispatch('todo/setCompleteById', {id: this.id, action: null});
    },
    edit(e) {
      this.$store.dispatch('todo/editTextById', {id: this.id, text: e.target.value});
      this.editMode = false;
    },
    remove() {
      this.$store.dispatch('todo/removeById', this.id);
    }
  }
}
</script>

<style src="./main-todo-list-item.scss" lang="scss"></style>

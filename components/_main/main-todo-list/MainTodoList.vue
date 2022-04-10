<template>
  <div v-bem>
    <Container drag-handle-selector=".main-todo-list-item__handle" @drop="onDrop">
      <Draggable v-for="(item, index) in list" :key="index">
        <MainTodoListItem v-bind="item"/>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {Container, Draggable} from 'vue-smooth-dnd'
import MainTodoListItem from "./_main-todo-list-item/MainTodoListItem.vue";
import {applyDrag} from "~/utils/apply-drag";

export default {
  name: "MainTodoList",
  components: {
    Container,
    Draggable,
    MainTodoListItem
  },
  computed: {
    ...mapGetters('todo', {list: 'list'})
  },
  methods: {
    onDrop(dropResult) {
      this.$store.dispatch('todo/setList', applyDrag(this.list, dropResult));
    },
  }
}
</script>

<style src="./main-todo-list.scss" lang="scss"></style>

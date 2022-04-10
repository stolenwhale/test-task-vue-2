<template>
  <div v-bem>
    <base-button
      v-if="countTotal - countCompleted > 0"
      v-bem:button
      type="button"
      variant="secondary"
      @click="checkAll">
      Check all
    </base-button>

    <template v-for="item in filters">
      <base-button
        v-if="item.condition"
        :key="item.code"
        v-bem:button
        type="button"
        :variant="activeFilter === item.code ? 'primary' : 'secondary'"
        @click="activeFilter = item.code">
        {{ item.name }}
      </base-button>
    </template>


    <base-button
      v-if="countCompleted > 0"
      v-bem:button
      type="button"
      variant="secondary"
      @click="clearCompleted">
      Clear completed
    </base-button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BaseButton from "~/components/_base/base-button/BaseButton.vue";

export default {
  name: "MainTodoControls",
  components: {BaseButton},
  data() {
    return {
      activeFilter: 'all'
    }
  },
  computed: {
    ...mapGetters('todo', {
      countTotal: 'countTotal',
      countCompleted: 'countCompleted',
      list: 'list'
    }),
    filters() {
      return [
        {
          code: 'all',
          name: 'All',
          condition: true
        },
        {
          code: 'active',
          name: 'Active',
          condition: this.countTotal - this.countCompleted > 0
        },
        {
          code: 'completed',
          name: 'Completed',
          condition: this.countCompleted > 0
        }
      ]
    }
  },
  watch: {
    activeFilter(code) {
      this.$store.dispatch('todo/setFilter', code);
    }
  },
  methods: {
    checkAll() {
      this.list.forEach(i => this.$store.dispatch('todo/setCompleteById', {id: i.id, action: true}))
    },
    clearCompleted() {
      this.list.forEach(i => {
        if (i.completed) {
          this.$store.dispatch('todo/removeById', i.id);
        }
      })
    }
  }
}
</script>

<style src="./main-todo-controls.scss" lang="scss"></style>

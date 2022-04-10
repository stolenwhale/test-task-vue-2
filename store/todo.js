const COOKIE_KEY = 'test-todo-app';

export const state = () => ({
  list: [],
  filter: 'all'
})

export const mutations = {
  SET_LIST: (state, list) => {
    state.list = list;
  },
  ADD_TO_LIST: (state, item) => {
    state.list.push(item);
  },
  SET_COMPLETE_BY_ID: (state, {id, action = null}) => {
    const item = state.list.find(i => i.id === id);
    item.completed = action === null ? !item.completed : action;
  },
  EDIT_TEXT_BY_ID: (state, {id, text}) => {
    const item = state.list.find(i => i.id === id);
    item.text = text;
  },
  REMOVE_BY_ID: (state, id) => {
    state.list = state.list.filter(i => i.id !== id);
  },
  SET_FILTER: (state, code) => {
    state.filter = code;
  },
}

export const actions = {
  init({ commit, state }, ctx) {
    const cookieRes = this.$cookies.get(COOKIE_KEY);
    commit('SET_LIST', cookieRes || []);
  },
  setList({ commit, state }, ctx) {
    commit('SET_LIST', ctx);
    this.$cookies.set(COOKIE_KEY, state.list);
  },
  addToList({ commit, state }, ctx) {
    commit('ADD_TO_LIST', {id: new Date().valueOf(), text: ctx, completed: false});

    this.$cookies.set(COOKIE_KEY, state.list);
  },
  setCompleteById({ commit, state }, ctx) {
    const {id, action} = ctx;
    commit('SET_COMPLETE_BY_ID', {id, action});
    this.$cookies.set(COOKIE_KEY, state.list);
  },
  editTextById({ commit, state }, ctx) {
    commit('EDIT_TEXT_BY_ID', ctx);
    this.$cookies.set(COOKIE_KEY, state.list);
  },
  removeById({ commit, state }, ctx) {
    commit('REMOVE_BY_ID', ctx);
    this.$cookies.set(COOKIE_KEY, state.list);
  },
  setFilter({ commit, state }, ctx) {
    commit('SET_FILTER', ctx);
  },
}

export const getters = {
  list: (state) => {
    switch (true) {
      case (state.filter === 'completed'): return state.list.filter(i => i.completed);
      case (state.filter === 'active'): return state.list.filter(i => !i.completed);
      default: return state.list;
    }
  },
  isTodoEmpty: (state) => !state.list.length,
  countTotal: (state) => state.list.length,
  countCompleted: (state) => state.list.filter(i => i.completed).length,
};

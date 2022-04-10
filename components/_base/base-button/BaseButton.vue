<template>
  <component :is="cTag" v-bem="{variant}" :type="type" @click="$emit('click')">
    <slot></slot>
  </component>
</template>

<script>
import _prop from 'vue-types';

export default {
  name: "BaseButton",
  props: {
    type: _prop.string.def('button'),
    variant: _prop.oneOf(['primary', 'secondary']).def('primary'),
    link: _prop.string,
    tag: _prop.string,
    loading: _prop.bool.def(false),
  },
  computed: {
    cTag() {
      if (this.tag) return this.tag;
      return this.link
        ? (this.link.startsWith('/')
          ? 'safe-nuxt-link'
          : 'a')
        : 'button';
    },
  }
}
</script>

<style src="./base-button.scss" lang="scss"></style>

<template lang="pug">
component(:is="layout")
  router-view
</template>
<script>
import Main from "@/layouts/Main"
import Empty from "@/layouts/Empty"
export default {
  components: {
    Main,
    Empty
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "empty"
    }
  }
}
</script>
<style lang="scss">
@import "./assets/main.css";
body {
  font-family: $regular;
}
html {
  margin-left: calc(100vw - 100%);
  margin-right: 0;
}
</style>

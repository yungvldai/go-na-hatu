<template>
  <i
    class="material-icons ui__icon"
    :style="(indent ? `margin-${indent}: 8px;` : '') + (color ? `color: ${color};` : '')"
  >
    {{ name }}
  </i>
</template>

<script>
  export default {
    props: {
      name: String,
      indent: String,
      color: String
    }
  }
</script>

<style scoped>
  .ui__icon {
    user-select: none;
    z-index: 61;
    font-size: 18pt;
  }
</style>

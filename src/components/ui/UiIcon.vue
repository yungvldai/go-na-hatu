<template>
  <i class="material-icons ui__icon"
    :style="indent ? `margin-${indent}: 8px;` : ''"
  >
    {{ name }}
  </i>
</template>

<script>
  export default {
    props: {
      name: String,
      indent: String
    }
  }
</script>

<style scoped>
  .ui__icon {
    font-size: 18pt;
  }
</style>

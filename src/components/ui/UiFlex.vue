<template>
  <div class="ui__flex">
    <slot />
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
  .ui__flex {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
</style>

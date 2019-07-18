<template>
  <div class="ui__addr">
    <i class="material-icons" style="margin-right: 2px;">
      location_on
    </i>
    {{ textAddr }}
  </div>
</template>

<script>
  export default {
    props: {
      textAddr: String,
      coords: Array
    }
  }
</script>

<style scoped lang="scss">
  .ui__addr {
    font-size: 10pt;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 5px;
    font-weight: bold;
    color: #671015;
    background-color: pink;
    border-radius: 10px;
    padding-right: 9px;
  }
</style>

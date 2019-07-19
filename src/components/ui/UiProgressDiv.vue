<template>
  <div
    class="progress"
    :style="`width: ${trueValue}%;`"
  />
</template>

<script>
  export default {
    props: {
      value: Number
    },
    data: () => ({
      trueValue: 0
    }),
    mounted() {
      setTimeout(() => {
        this.trueValue = this.value;
      }, 400);
    }
  }
</script>

<style scoped>
  .progress {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 0px;
    background-color: #1FCC14;
    opacity: 0.6;
    transition: 1s;
    z-index: 60;
  }
</style>

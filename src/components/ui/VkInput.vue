<template>
  <div class="ui__textinput" :style="styles">
    <div class="vk__label">
      vk.com/
    </div>
    <input
      type="text"
      :value="value"
      class="input"
      @input="handleInput($event.target.value)"
      placeholder="id"
    />
  </div>
</template>

<script>
  export default {
    props: ['width', 'value', 'placeholder', 'height'],
    data: () => ({
    }),
    methods: {
      handleInput(value) {
        this.$emit('input', value);
      }
    },
    computed: {
      styles() {
        return {
          width: this.width,
          height: this.height
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .ui__textinput {
    position: relative;
    display: inline-block;
    .vk__label {
      border-radius: 6px 0 0 6px;
      border: 1px solid $appBorder;
      width: 64px;
      padding: 6px 12px;
      display: inline-block;
    }
    .input {
      display: inline-block;
      width: calc(100% - 115px);
      height: 100%;
      padding: 6px 12px;
      border-radius: 0 6px 6px 0;
      border: 1px solid $appBorder;
      border-left: none;
      font-size: 14pt;
      outline: none;
      font-family: 'Roboto', sans-serif;
      font-size: 14pt;
    }
  }
</style>

<template>
  <div class="ui__textinput" :style="styles">
    <textarea
      v-if="type === 'textarea'"
      class="input"
      @input="handleInput($event.target.value)"
      @focus="focus = true"
      @blur="focus = false"
      :placeholder="placeholder"
      :value="value"
      :readonly="readonly"
      @click="($event) => {select ? $event.target.select() : () => {}}"
    ></textarea>
    <input
      v-else
      type="text"
      :value="value"
      class="input"
      :readonly="readonly"
      @input="handleInput($event.target.value)"
      @focus="focus = true"
      @blur="focus = false"
      :placeholder="placeholder"
      @click="($event) => {select ? $event.target.select() : () => {}}"
    />
  </div>
</template>

<script>
  export default {
    props: ['width', 'value', 'type', 'placeholder', 'height', 'readonly', 'select'],
    data: () => ({
      focus: false
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
    .placeholder {
      position: absolute;
      color: $appBorder;
      transition: 0.3s;
    }
    .input {
      width: 100%;
      height: 100%;
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid $appBorder;
      font-size: 14pt;
      outline: none;
      font-family: 'Roboto', sans-serif;
      font-size: 14pt;
    }
  }
</style>

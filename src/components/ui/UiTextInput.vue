<template>
  <div class="ui__textinput">
    <textarea
      v-if="type === 'textarea'"
      class="input"
      :style="styles"
      @input="handleInput($event.target.value)"
      @focus="focus = true"
      @blur="focus = false"
      :placeholder="placeholder"
      :value="value"
    ></textarea>
    <input
      v-else
      type="text"
      :value="value"
      class="input"
      :style="styles"
      @input="handleInput($event.target.value)"
      @focus="focus = true"
      @blur="focus = false"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
  export default {
    props: ['width', 'value', 'type', 'placeholder', 'height'],
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
    margin-bottom: 10px;
    position: relative;
    .placeholder {
      position: absolute;
      color: $appBorder;
      transition: 0.3s;
    }
    .input {
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

<template>
  <div class="ui__textinput">
    <label class="placeholder" :style="phStyles" @click="focus = true">
      {{ placeholder }}
    </label>
    <textarea
      v-if="type === 'textarea'"
      class="input"
      :style="styles"
      @input="handleInput($event.target.value)"
      @focus="focus = true"
      @blur="focus = false"
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
      },
      phStyles() {
        return this.focus || this.value.length > 0 ?
        {
          top: '-4px',
          left: '8px',
          'font-size': '8pt',
          color: '#4A235A'
        } : {
          top: '18px',
          left: '14px',
          'font-size': '14pt'
        };
      }
    }
  }
</script>

<style scoped lang="scss">
  .ui__textinput {
    margin-top: 10px;
    padding-top: 10px;
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
    }
  }
</style>

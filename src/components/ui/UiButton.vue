<template>
  <div
    class="ui__button"
    :style="styles"
    @click.prevent="makeAction"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      color: String,
      action: {
        type: Function,
        required: true,
        default: () => {}
      },
      width: String,
      border: {
        type: Boolean,
        default: true
      },
      align: {
        type: String,
        default: 'center'
      }
    },
    methods: {
      makeAction() {
        setTimeout(this.action, 200);
      }
    },
    computed: {
      styles() {
        return {
          color: this.color,
          border: this.border ? `1px solid ${this.color}` : 'none',
          '--bg-color-active': this.color,
          width: this.width,
          'justify-content': this.align
        }
      }
    }
  }
</script>

<style scoped>
  .ui__button {
    outline: none;
    user-select: none;
    border-radius: 6px;
    padding: 6px 12px;
    display: inline-flex;
    transition: .15s;
    cursor: pointer;
    font-size: 14pt;
    line-height: 1.5;
    align-items: center;
  }
  .ui__button:active {
    color: white !important;
    background-color: var(--bg-color-active);
    box-shadow: 0px 0px 5px 1px var(--bg-color-active);
  }
</style>

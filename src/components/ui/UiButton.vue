<template>
  <div
    class="ui__button"
    :style="styles"
    @click.prevent="action"
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
      }
    },
    data: () => ({
      //
    }),
    computed: {
      styles() {
        return {
          color: this.color,
          border: `1px solid ${this.color}`,
          '--bg-color-active': this.color
        }
      }
    }
  }
</script>

<style scoped>
  .ui__button {
    user-select: none;
    border-radius: 6px;
    padding: 6px 12px;
    display: inline-flex;
    transition: .15s;
    cursor: pointer;
    font-size: 14pt;
    line-height: 1.5;
    align-items: center;
    justify-content: center;
  }
  .ui__button:active {
    color: white !important;
    background-color: var(--bg-color-active);
    box-shadow: 0px 0px 5px 1px var(--bg-color-active);
  }
</style>

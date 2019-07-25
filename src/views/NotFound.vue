<template>
  <div id="not__found">
    <img style="width: 50%;" src="/notfound.png" />
    <span class="hint">Похоже, что тут уже все в кашу.</span>
    <ui-button color="#4A235A" :action="goToAll">
      <ui-icon indent="right" name="search" />
      Найти другую тусу
    </ui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      goToAll() {
        setTimeout(() => this.$router.push('/list'), 200);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #not__found {
    .hint {
      color: $appColor;
      margin-bottom: 50px;
    }
    width: 100%;
    height: calc(100% - 64px);
    position: fixed;
    top: 64px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    z-index: 60;
  }
</style>

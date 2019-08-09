<template>
  <div id="wait__party">
    <div class="emodji">
      <div style="margin-bottom: 10px;">🍺🔥🎵🎉</div>
      <div>Ждем тусовщиков и тусовщиц</div>
      <div class="hint">Люди, изъявившие желание прийти к Вам<br> будут появляться тут</div>
    </div>
    <div class="pulse__circle"/>
    <div class="pulse__circle2"/>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  #wait__party {
    .emodji {
      height: 20px;
      position: fixed;
      width: 100%;
      text-align: center;
      top: calc(50% - 10px);
      left: 0px;
      color: $appColor;
      .hint {
        margin-top: 100px;
        color: gray;
        font-size: 10pt;
        font-style: italic;
      }
      z-index: 30;
    }
    .pulse__circle {
      background-color: $appColor;
      opacity: 0.8;
      position: fixed;
      width: 0px;
      height: 0px;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      animation: pulse 4s infinite ease-out;
      z-index: 29;
    }
    .pulse__circle2 {
      background-color: $appColor;
      opacity: 0.8;
      position: fixed;
      width: 0px;
      height: 0px;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      animation: pulse 4s infinite ease-out;
      animation-delay: 2s;
      z-index: 29;
    }
  }
  @keyframes pulse {
    from {
      width: 0px;
      height: 0px;
      left: 50%;
      top: 50%;
      opacity: 0.8;
    }
    to {
      width: 1000px;
      height: 1000px;
      left: calc(50% - 500px);
      top: calc(50% - 500px);
      opacity: 0;
    }
  }
</style>

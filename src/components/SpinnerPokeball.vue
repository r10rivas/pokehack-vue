<template>
  <div class="w-full h-screen-nav flex justify-center items-center">
    <div class="w-120 h-160 flex-shrink-0">
      <div class="absolute t-1/2 l-1/2 transform translate-y-1/2 translate-x-1/2">
        <div class="pokeball">
          <div class="pokeball__button"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "SpinnerPokeball",
  }
</script>
<style lang="scss" scoped>
  .pokeball {
    @apply w-60 h-60;
    @apply relative;
    @apply rounded-full border-4 border-solid border-black;
    @apply bg-white overflow-hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: shake 1.25s cubic-bezier(.36,.07,.19,.97) infinite;

    &::before, &::after {
      @apply absolute;
      content: "";
    }

    &::before {
      @apply w-full h-1/2;
      @apply bg-red-800;
    }

    &::after {
      @apply w-full h-4;
      @apply bg-black;
      top: calc(50% - 4px);
    }



    &__button {
      position: absolute;
      width: 30px;
      height: 30px;
      border: 4px solid #7f8c8d;
      border-radius: 50%;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      box-shadow: 0 0 0 7px black;
      background: #fff;
      z-index: 10;
      animation: blink .5s alternate infinite;
    }
  }

  @keyframes shake {
    0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
  }

  @keyframes blink {
    from { background: #eee;}
    to { background: #e74c3c; }
  }
</style>
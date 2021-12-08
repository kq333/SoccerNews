<template>
  <div class="container">
    <div class="button">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaruselButton",
};
</script>

<style scoped lang="scss">
.conainer {
  max-width: 60px;
  max-height: 120px;

  .button {
    font-size: 120px;

    @media(width:375px){
       font-size: 80px;
    }
  }
}
</style>

<template>
  <div class="container">
      <slot name="numbers">{{number}}</slot>

  </div>
</template>

<script>
export default {
    name: 'ButtonNumber',

    props:{
        number:{
            default: 1,
        }
    }



}
</script>



<style>

</style>
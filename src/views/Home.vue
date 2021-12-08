<template>
  <div class="home">

    <HomePage />
  </div>
</template>

<script>

import HomePage from '@/components/HomePage.vue'

export default {

  name: 'Home',
  components: {
    HomePage
  }
}
</script>

<style scoped lang="scss">

.home{
  height: auto;
}

</style>

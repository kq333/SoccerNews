<template>
  <div>
    <MarketValueComponent id="id"/>
  </div>
</template>

<script>
import MarketValueComponent from '../components/MarketValueComponent.vue'
export default {

  name:"MarketValue",

  components: { MarketValueComponent },

  props:{
    id:{
      type:String
    }
  }

}
</script>

<style>

</style>
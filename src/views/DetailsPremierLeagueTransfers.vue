<template>
  <div>
    <PremierLeagueTransferRumors :id="id" />
  </div>
</template>

<script>
import PremierLeagueTransferRumors from "../components/PremierLeagueTransferRumors.vue";

export default {
  name: "DetailspremierLeaguetransfers",

  components: {
    PremierLeagueTransferRumors,
  },

  props:{
  id:{
    type:String,
  }
}



};
</script>

<style></style>

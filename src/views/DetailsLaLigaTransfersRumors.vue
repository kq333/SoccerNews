<template>
  <div class="container">
    <LaLigaTransfersRumors :id="id" />
  </div>
</template>

<script>
import LaLigaTransfersRumors from "../components/LaLigaTransfersRumors.vue";

export default {
  name: "DetailsLaLigaTransfersRumors",

  components: {
    LaLigaTransfersRumors,
  },


props:{
  id:{
    type:String,
  }
}

};

</script>

<style lang="scss" scoped>
.about {
  margin-top: 200px;
}

img {
  width: 70px;
  height: 110px;
  margin-top: -10px;
}
</style>

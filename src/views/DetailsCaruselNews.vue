<template>
  <div>
    <DetailsCaruselNewsComponent :id="id" />
  </div>
</template>

<script>
import DetailsCaruselNewsComponent from "../components/DetailsCaruselNewsComponent.vue";
export default {
  name: "DetailsCaruselNews",

  components: {
    DetailsCaruselNewsComponent,
  },

  props:{
    id:{
      type:String
    }
  }
};
</script>

<style></style>

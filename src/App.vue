<template>
  <div id="nav">
  <!--  <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style lang="scss">
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

body{
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
}
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;



}

#nav {


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

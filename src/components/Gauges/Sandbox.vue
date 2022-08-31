<template>
    <div id="">
   <vue-speedometer/>
    </div>
  </template>
  
  <script>
  import VueSpeedometer from "vue-speedometer"
  export default {
    name: 'Sandbox',
    components: { VueSpeedometer }, 
     template: `<vue-speedometer />`,
    
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .auth-container{
    display: block !important;
  }
  </style>
  
  
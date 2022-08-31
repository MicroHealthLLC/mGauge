<template>
  <div class="col">
    <vue-speedometer class="row-4" :value=85 :maxValue=100 :segments="3"
      :segmentColors='["tomato", "gold", "limegreen"]' needleColor="black" :customSegmentStops='[0, 75, 90, 100]'
      :customSegmentLabels='[
        {
          text: "Bad",
          position: "OUTSIDE",
          color: "#555",
        },
        {
          text: "Ok",
          position: "OUTSIDE",
          color: "#555",
          fontSize: "19px",
        },
        {
          text: "Good",
          position: "OUTSIDE",
          color: "#555",
        },
      ]' />
    <vue-speedometer class="row-4" :paddingVertical=10 :forceRender=true :value=85 :maxValue=100 :segments="25"
      :needleHeightRatio=.6 needleColor="red" :ringWidth=210 :maxSegmentLabels=10 :width=500 startColor="white"
      endColor="black" :needleTransitionDuration="2000" needleTransition="easeQuadInOut" />

    <vue-speedometer class="row-4" :value="toggle ? 49 : 51" :maxValue=100 :width=500 :needleHeightRatio=.9
      needleColor="black" :paddingVertical=10 :ringWidth=110 :customSegmentStops='[0, 30, 45, 55, 70, 100]'
      :segmentColors='["tomato", "gold", "limegreen", "gold", "tomato"]' :customSegmentLabels='[
  {
    text: "Bad",
    position: "OUTSIDE",
    color: "black",
    fontSize: "20px"
  },
  {
    text: "Ok",
    position: "OUTSIDE",
    color: "black",
    fontSize: "20px"
  },
  {
    text: "Good",
    position: "OUTSIDE",
    color: "black",
    fontSize: "20px"
  },
  {
    text: "Ok",
    position: "OUTSIDE",
    color: "black",
    fontSize: "20px"
  },
  {
    text: "Bad",
    position: "OUTSIDE",
    color: "black",
    fontSize: "20px"
        },
      ]' />
  </div>
</template>
  
<script>
import VueSpeedometer from "vue-speedometer"
export default {
  name: 'Sandbox',
  components: { VueSpeedometer },
  created() {
    setInterval(() => (this.toggle = !this.toggle), 300);
  },
  data() {
    return {
      toggle: false
    };
  },

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
  
  .auth-container {
    display: block !important;
  }
  </style>
  
  
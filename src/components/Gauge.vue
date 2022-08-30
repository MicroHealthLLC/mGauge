<template>
  <div id="">
    <vue-speedometer :forceRender=true :value=85 :maxValue=100 :segments="3"
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
    <vue-speedometer :forceRender=true :value=50 :maxValue=100 :width=500 :needleHeightRatio=.8 needleColor="black"
      :paddingVertical=10 :ringWidth=80 :customSegmentStops='[0, 30, 45, 55, 70, 100]'
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
  name: 'Gauge',
  components: { VueSpeedometer },
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


<!-- Add "scoped" attribute to limit CSS to this component only -->


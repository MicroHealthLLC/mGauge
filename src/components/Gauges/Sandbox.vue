<template>
  <div class="col">
    <h2>Cybersecurity</h2>
    <vue-speedometer class="row-4" :value="getSecurityValue(security)" :maxValue=100 :segments="3" :needleHeightRatio=.8 :forceRender=true
      :segmentColors='["tomato", "gold", "limegreen"]' needleColor="black" :customSegmentStops='[0, 70, 85, 100]'
      :customSegmentLabels='[
        {
          text: "Unsecure",
          position: "OUTSIDE",
          color: "#555",
        },
        {
          text: "Improve",
          position: "OUTSIDE",
          color: "#555",
        },
        {
          text: "Secure",
          position: "OUTSIDE",
          color: "#555",
        },
      ]' />
      <h2>Customer Satisfaction</h2>
    <vue-speedometer class="row-4" :value="getCustSatValue(custSat)" :maxValue=100 :segments="3" :needleHeightRatio=.8 :forceRender=true
      :segmentColors='["tomato", "gold", "limegreen"]' needleColor="black" :customSegmentStops='[0, 70, 85, 100]'
      :customSegmentLabels='[
        {
          text: "Poor",
          position: "OUTSIDE",
          color: "#555",
        },
        {
          text: "Fair",
          position: "OUTSIDE",
          color: "#555",
        },
        {
          text: "Good",
          position: "OUTSIDE",
          color: "#555",
        },
      ]' />
    <!-- <vue-speedometer class="row-4" :paddingVertical=10 :forceRender=true :value=85 :maxValue=100 :segments="25"
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
      ]' /> -->
  </div>
</template>
  
<script>
import VueSpeedometer from "vue-speedometer"
export default {
  name: 'Sandbox',
  components: { VueSpeedometer },
  mounted() {
    //setInterval(() => (this.toggle = !this.toggle), 300);
  },
  data() {
    return {
      toggle: false,
      security: {
        breach: 1,
        defender: 1,
        wazuh: .8,
        stackPath: 1,
        crowdStrike: 0,
        tenable: 1,
      },
      custSat: {
        avgTimeToRes: 1,
        longResTime: .75,
        survey: 1,
        dirFeedback: 1,
      }
    };
  },
  methods: {
    getSecurityValue(userData) {
      return (userData.breach * 40) + (userData.defender * 20) + (userData.wazuh * 10) + (userData.stackPath * 10) + (userData.crowdStrike * 10) + (userData.tenable * 10)
    },
    getCustSatValue(userData) {
      return (userData.avgTimeToRes * 30) + (userData.longResTime * 20) + (userData.survey * 25) + (userData.dirFeedback * 25)
    }
  }

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
  
  
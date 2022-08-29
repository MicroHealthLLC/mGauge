<template>
  <div id="">
 <vue-speedometer/>
  </div>
</template>

<script>
import VueSpeedometer from "vue-speedometer"

// export const ig = () => `
//   <div>
//     <vue-speedometer
//       :needleHeightRatio="0.7"
//       :maxSegmentLabels="5"
//       :segments="75"
//       :value="333"
//       textColor="${textColor}"
//     />
//   </div>
// `
export default {
  name: 'Gauge',
  components: { VueSpeedometer }, 
   template: `<vue-speedometer />`,
  // template: `
  //   <div>
  //     <vue-speedometer 
  //     :width="500"
  //     :needleHeightRatio="0.7"
  //     :value="777"
  //     currentValueText="Happiness Level"
  //     :customSegmentLabels='[
  //       {
  //         text: "Very Bad",
  //         position: "INSIDE",
  //         color: "#555",
  //       },
  //       {
  //         text: "Bad",
  //         position: "INSIDE",
  //         color: "#555",
  //       },
  //       {
  //         text: "Ok",
  //         position: "INSIDE",
  //         color: "#555",
  //         fontSize: "19px",
  //       },
  //       {
  //         text: "Good",
  //         position: "INSIDE",
  //         color: "#555",
  //       },
  //       {
  //         text: "Very Good",
  //         position: "INSIDE",
  //         color: "#555",
  //       },
  //     ]'
  //     :ringWidth="47"
  //     :needleTransitionDuration="3333"
  //     needleTransition="easeElastic"
  //     needleColor="#a7ff83"
  //     textColor="#d8dee9"
  //   />
  //   </div>
  // `,
  // created() {
  //   setInterval(() => (this.toggle = !this.toggle), 1111);
  // },
  // data() {
  //   return {
  //     toggle: false
  //   };
  // },

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


<!-- Add "scoped" attribute to limit CSS to this component only -->


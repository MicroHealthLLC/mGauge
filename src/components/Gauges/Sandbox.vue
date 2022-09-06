<template>
  <div class="col">
    <vue-speedometer class="row-4" :value=value :segments=segments :colors=colors :maxValue=maxValue :minValue=minValue
      :paddingVertical=10 :paddingHorizontal=10 :forceRender=true :customSegmentStops=customSegmentStops />
    <v-btn
      @click="logSegments">
      Show Changes</v-btn>
    <v-btn @click="increaseSegment(1)">1+</v-btn>
    <v-btn @click="decreaseSegment(1)">1-</v-btn>
    <v-btn @click="increaseSegment(2)">2+</v-btn>
    <v-btn @click="decreaseSegment(2)">2-</v-btn>
    <v-btn @click="addSegment(40)">Add segment 40</v-btn>
    <v-btn @click="addSegment(60)">Add segment 60</v-btn>
    <v-btn @click="addSegment(90)">Add segment 90</v-btn>

    <!-- <vue-speedometer class="row-4" :paddingVertical=10 :paddingHorizontal=10 :forceRender=true :value=8 :maxValue=10
      :segments=6 :needleHeightRatio=.7 needleColor="red" :needleTransitionDuration="2000"
      needleTransition="easeQuadInOut"
      :segmentColors='["tomato", "tomato", "gold", "gold", "limegreen", "limegreen"]' />
    <vue-speedometer class="row-4" :value="50" :forceRender=true :maxValue=100 :width=500 :needleHeightRatio=.9
      needleColor="black" :paddingVertical=10 :ringWidth=110 :customSegmentStops='[0, 30, 45, 55, 70, 100]'
      :segmentColors='["tomato", "gold", "limegreen", "gold", "tomato"]' /> -->
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
      colors: ["tomato", "gold", "limegreen", "green"],
      segments: 3,
      value: 67,
      maxValue: 100,
      minValue: 0,
      customSegmentStops: [0, 70, 85, 100],
    };
  },
  methods: {
    setMinValue(val) {
      this.minValue = val
    },
    setMaxValue(val) {
      this.maxValue = val
    },
    logSegments() {
      this.customSegmentStops = [...this.customSegmentStops]
      console.log(this.customSegmentStops)
    },
    addSegment(val) {
      this.segments += 1;
      console.log(this.customSegmentStops[1])
      for (let i = 0; i < this.customSegmentStops.length; i++) {
        if (val > this.customSegmentStops[i] && val < this.customSegmentStops[i+1]) {
          console.log(val)
      console.log(this.customSegmentStops)
          this.customSegmentStops.splice(i + 1, 0, val)
          break;
        }
      }
    },
    increaseSegment(index) {
      this.setDefaultMinMax()
      this.customSegmentStops[index] = this.customSegmentStops[index] + 1
      this.logSegments()
    },
    decreaseSegment(index) {
      this.setDefaultMinMax()
      this.customSegmentStops[index] = this.customSegmentStops[index] - 1
      this.logSegments()
    },
    setDefaultMinMax() {
      this.setMinValue(this.customSegmentStops[0])
      this.setMaxValue(this.customSegmentStops[this.customSegmentStops.length - 1])
    }
  },
  computed: {
    /* minValue() {
      return 0
    },
    maxValue() {
      return 100
    } */
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
  
  
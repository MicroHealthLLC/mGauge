<template>
  <div>
    <v-row class="center">
      <v-col cols="8" v-if="lastSavedGauge" class="text-center">
        <h1 v-if="lastSavedGauge.title" class="mb-3">{{ lastSavedGauge.title }}</h1>
        <h1 v-else class="mb-3">{{ newGauge.title }}</h1>
        <vue-speedometer class="row-4 mb-3" :value="lastSavedGauge.values[0].val_a" :maxValue=100 :fluidWidth=true
          :needleHeightRatio=.9 needleColor="black" :paddingVertical=20 :ringWidth=110
          :customSegmentStops='[0, 30, 45, 55, 70, 100]'
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
        <label class="d-block text-left"><b>Comments:</b></label>
        <p class="mb-3 text-left">{{ lastSavedGauge.comments }}</p>
      </v-col>

      <v-col v-else cols="8" class="text-center">
        <h1 class="mb-3">{{ newGauge.title }}</h1>
        <vue-speedometer class="row-4 mb-3" :value="newGauge.values[0].val_a" :maxValue=100 :fluidWidth=true
          :needleHeightRatio=.9 needleColor="black" :paddingVertical=10 :ringWidth=110
          :customSegmentStops='[0, 30, 45, 55, 70, 100]'
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
        <label class="d-block text-left"><b>Comments:</b></label>
        <p class="mb-3 text-left">{{ newGauge.comments }}</p>
      </v-col>

      <v-col cols="4" v-if="lastSavedGauge">
        <v-card class="mx-auto" max-width="400" :disabled="saving" :loading="saving">
          <v-form class="px-3" ref="form">
            <v-list-item two-line class="pl-0">
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  <v-row>
                    <v-col cols="6" v-if="lastSavedGauge.title">
                      <v-text-field v-model="lastSavedGauge.title" label="mGauge Name"></v-text-field>
                    </v-col>
                    <v-col cols="6" v-else>
                      <v-text-field v-model="newGauge.title" label="mGauge Name"></v-text-field>
                    </v-col>
                  </v-row>
                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>

            <v-row>
              <v-col cols="6" class="pb-0">
                <v-text-field label="Score" :maxlength="2" :minlength="1" type="number"
                  v-model.number="lastSavedGauge.values[0].val_a" placeholder="Enter value from 1-99" outlined
                  class="mb-3"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col cols="12" class="pt-0">
                <v-textarea class="pt-0" v-model="lastSavedGauge.comments" color="teal">
                  <template v-slot:label>
                    <div>
                      Comments <small>(optional)</small>
                    </div>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>
            <v-card-actions class="pl-0">
              <v-btn @click="saveGauge" color="var(--mh-blue)" dark>
                SAVE CHANGES
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="4" v-else>
        <v-card class="mx-auto" max-width="400">
          <v-form class="px-3" ref="form">
            <v-list-item two-line class="pl-0">
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  <v-row>
                    <v-col cols="6">
                      <v-text-field v-model="newGauge.title" label="mGauge Name"></v-text-field>
                    </v-col>
                  </v-row>
                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>

            <v-row>
              <v-col cols="6" class="pb-0 text-h2">
                <v-text-field label="Score" :maxlength="2" :minlength="1" type="number"
                  v-model.number="newGauge.values[0].val_a" placeholder="Enter value from 1-99" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col cols="12" class="pt-0">

                <v-textarea class="pt-0" v-model="newGauge.comments" color="teal">
                  <template v-slot:label>
                    <div>
                      Comments <small>(optional)</small>
                    </div>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn @click="saveGauge" color="var(--mh-blue)" dark>
                SAVE
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>


    </v-row>
    <v-bottom-navigation class="bottomNav">
      <v-btn @click="clearForm">
        <span>Create</span>
        <v-icon>mdi-gauge</v-icon>
      </v-btn>
      <!-- <v-btn>
      <span>Save</span>
      <v-icon>mdi-content-save</v-icon>
    </v-btn> -->
      <v-btn @click="deployPresentation">
        <span>Present</span>
        <v-icon>mdi-presentation</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VueSpeedometer from "vue-speedometer"
// import NewGauge from "./NewGauge"

// import utilitiesMixin from "../../mixins/utilities-mixin";
// import CurrentGoals from "../../components/CurrentGoals.vue";

export default {
  name: "Gauges",
  //   mixins: [utilitiesMixin],
  components: {
    VueSpeedometer
  },
  data() {
    return {
      toggle: false,
      dialog: false,
      newGauge: {
        title: null,
        comments: null,
        values: [{ val_a: 0, val_b: 0, val_c: 0, overall_val: 0 }],
      },
    };
  },
  methods: {
    ...mapActions(["addGauge", "fetchGauges", "removeGauge", "updateGaugeById"]),
    log(e) {
      console.log(e)
    },
    async saveGauge() {

      try {
        if (this.lastSavedGauge) {
          console.log(this.newGauge)
          console.log(this.lastSavedGauge)
          let updatedTitle = ''
          if (this.newGauge && this.newGauge.title) {
            updatedTitle = this.newGauge.title
          } else updatedTitle = this.lastSavedGauge.title
          await this.updateGaugeById({
            id: this.lastSavedGauge.id,
            title: updatedTitle,
            comments: this.lastSavedGauge.comments,
            values: this.lastSavedGauge.values
          });
        } else {
          console.log(this.newGauge)
          await this.addGauge(this.newGauge);
          this.$refs.form.reset();
        }
      }
      catch (error) {
        console.log(error);
      }
    },
    clearForm() {
      this.$refs.form.reset();
    },
    deployPresentation() {
      // this.dialog = true
      alert("Hi.  This is the mGauge presentation")
    },
    // async deleteGauge(id) {
    //   try {
    //     await this.removeGauge(id);
    //   } catch (error) {
    //     console.log(error);
    //   }

    // },

    handleClick(e) {
      console.log(e)
    },
  },
  computed: {
    ...mapGetters(["savedGauges", "saving"]),
    lastSavedGauge() {
      return this.savedGauges[0]
    },
  },

  async mounted() {
    this.fetchGauges();
  },
};
</script>

    <style>
    .bottomNav {
      position: absolute;
    }
    
    .center {
      margin-top: 10%;
    }
    
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input[type="number"] {
      -moz-appearance: textfield;
    }
    </style>
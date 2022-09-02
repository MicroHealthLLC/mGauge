import { API, graphqlOperation } from "aws-amplify";
import { createGauge } from "@/graphql/mutations";
import { updateGauge } from "@/graphql/mutations";
import { deleteGauge } from "@/graphql/mutations";
import { listGauges } from "@/graphql/queries";

export default {
  state: {
    gauges: [],
  },
  actions: {
    async addGauge({ commit, dispatch }, gauge) {
      commit("TOGGLE_SAVING", true);
      try {
        await API.graphql(graphqlOperation(createGauge, { input: gauge }));
        dispatch("fetchGauges");
        commit("SET_SNACKBAR", {
          show: true,
          message: "mGauge Successfully Added!",
          color: "var(--mh-green)",
        });
      } catch (error) {
        console.log(error);
      }
      commit("TOGGLE_SAVING", false);
    },
    async updateGaugeById({ commit, dispatch }, gauge) {
      commit("TOGGLE_SAVING", true);
      try {
        await API.graphql(graphqlOperation(updateGauge, { input: gauge }));
        dispatch("fetchGauges");
        commit("SET_SNACKBAR", {
          show: true,
          message: "mGauge Successfully Updated!",
          color: "var(--mh-green)",
        });
      } catch (error) {
        console.log(error);
      }
      commit("TOGGLE_SAVING", false);
    },
    async removeGauge({ commit, dispatch }, id) {
      try {
        await API.graphql(graphqlOperation(deleteGauge, { input: id }));
        dispatch("fetchGauges");
        commit("SET_SNACKBAR", {
          show: true,
          message: "mGauge Removed",
          color: "var(--mh-orange)",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGauges({ commit }) {
      try {
        const res = await API.graphql(graphqlOperation(listGauges));
        commit("SET_GAUGES", res.data.listGauges.items);
        console.log(res.data.listGauges.items)
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    ADD_GAUGE: (state, gauge) => state.gauges.push(gauge),
    SET_GAUGES: (state, gauges) => (state.gauges = gauges),
  },
  getters: {
    gauges: (state) => state.gauges,
    savedGauges: (state) => state.gauges.filter((gauge) => gauge.id),
  },
};

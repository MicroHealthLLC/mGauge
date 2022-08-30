import { Auth } from "aws-amplify";

export default {
  state: {
    user: null,
  },
  actions: {
    async login({ commit, dispatch }, { username, password }) {
      try {
        commit("TOGGLE_LOADING", true);
        await Auth.signIn({ username, password });

        dispatch("fetchCurrentUser");
        commit("TOGGLE_LOADING", false);
        return Promise.resolve("Success");
      } catch (error) {
        console.log(error);
        commit("TOGGLE_LOADING", false);
        return Promise.reject(error);
      }
    },
    async logout({ commit }) {
      commit("SET_USER", null);
      return await Auth.signOut();
    },
    async signUp(
      { commit },
      { username, firstName, lastName, password, email, phoneNumber }
    ) {
      try {
        commit("TOGGLE_LOADING", true);

        await Auth.signUp({
          username,
          password,
          attributes: {
            email: email,
            phone_number: phoneNumber,
            given_name: firstName,
            family_name: lastName,
          },
        });

        commit("SET_SNACKBAR", {
          show: true,
          message: "Confirmation Code Sent to Email",
          color: "var(--mh-green)",
        });
        commit("TOGGLE_LOADING", false);
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        commit("TOGGLE_LOADING", false);
        return Promise.reject(error);
      }
    },
    async confirmSignUp({ commit }, { username, code }) {
      try {
        commit("TOGGLE_LOADING", true);

        await Auth.confirmSignUp(username, code);

        commit("TOGGLE_LOADING", false);
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        commit("TOGGLE_LOADING", false);
        return Promise.reject(error);
      }
    },
    async resendConfirmationCode({ commit }, username) {
      try {
        commit("TOGGLE_LOADING", true);

        await Auth.resendSignUp(username);

        commit("SET_SNACKBAR", {
          show: true,
          message: "Confirmation Code Sent to Email",
          color: "var(--mh-green)",
        });
        commit("TOGGLE_LOADING", false);
        console.log("code resent successfully");
      } catch (error) {
        commit("TOGGLE_LOADING", false);
        console.log(error);
        return Promise.reject(error);
      }
    },
    async fetchCurrentUser({ commit }) {
      try {
        const userInfo = await Auth.currentUserInfo();
        const userCredentials = await Auth.currentAuthenticatedUser();
        const groups =
          userCredentials.signInUserSession.accessToken.payload[
            "cognito:groups"
          ] || [];
        const isEditor = groups.includes("Editors");

        commit("SET_USER", { ...userInfo, isEditor: isEditor });
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser({ commit, dispatch }, userDetails) {
      try {
        commit("TOGGLE_SAVING", true);
        let user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, userDetails);
        dispatch("fetchCurrentUser");
        commit("SET_SNACKBAR", {
          show: true,
          message: "Profile Successfully Updated!",
          color: "var(--mh-green)",
        });
      } catch (error) {
        console.log(error);
        if (error.toString().includes("Invalid phone number format")) {
          commit("SET_SNACKBAR", {
          show: true,
          message: "Invalid Phone Number Provided!",
          color: "red",
        });
        }
      }
      commit("TOGGLE_SAVING", false);
    },
    async changePassword({ commit }, { oldPassword, newPassword }) {
      try {
        commit("TOGGLE_SAVING", true);
        const user = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(user, oldPassword, newPassword);
        commit("SET_SNACKBAR", {
          show: true,
          message: "Password Successfully Updated!",
          color: "var(--mh-green)",
        });
        commit("TOGGLE_SAVING", false);
      } catch (error) {
        console.log(error);
        commit("TOGGLE_SAVING", false);
        return Promise.reject(error);
      }
      commit("TOGGLE_SAVING", false);
    },
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user),
  },
  getters: {
    user: (state) => state.user,
    isEditor: (state) => state.user?.isEditor || false,
  },
};

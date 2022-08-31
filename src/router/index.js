import Auth from "@aws-amplify/auth";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUp.vue"),
  },
  {
    path: "/verify",
    name: "SignUpVerify",
    props: true,
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUpVerify.vue"),
  },
  {
    path: "/gauges/sandbox",
    name: "Sandbox",
    component: () =>
      import(
        /* webpackChunkName: "newCompetitions" */ "../components/Gauges/Sandbox.vue"
      ),
    meta: { requiresAuth: true},
  },
//   {
//     path: "/reset-password",
//     name: "ResetPassword",
//     component: () =>
//       import(/* webpackChunkName: "signup" */ "../views/ResetPassword.vue"),
//   },
//   {
//     path: "/reset-password",
//     name: "ResetPassword",
//     component: () =>
//       import(/* webpackChunkName: "signup" */ "../views/ResetPassword.vue"),
//   },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },  
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: { requiresAuth: true },
  },
//   {
//     path: "/page-not-found",
//     name: "PageNotFound",
//     component: () =>
//       import(
//         /* webpackChunkName: "pageNotFound" */ "../views/PageNotFound.vue"
//       ),
//   },
  {
    path: "/not-authorized",
    name: "NoAuth",
    component: () =>
      import(
        /* webpackChunkName: "notAuthorized" */ "../views/NoAuth.vue"
      ),
  },
//   {
//     path: "*",
//     redirect: "/page-not-found",
//   },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log(to)
  console.log(VueRouter)
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresEditor = to.matched.some(
    (record) => record.meta.requiresEditor
  );
  let isEditor = false;
  let currentUserInfo = null;

  if (store.getters.isEditor) {
    isEditor = store.getters.isEditor;
    currentUserInfo = store.getters.user;
  } else {
    currentUserInfo = await Auth.currentUserInfo();
    if (currentUserInfo) {
      const userCredentials = await Auth.currentAuthenticatedUser();
      const groups =
        userCredentials.signInUserSession.accessToken.payload[
          "cognito:groups"
        ] || [];
      isEditor = groups.includes("Editors");
    }
  }

  if (requiresAuth && requiresEditor && !isEditor && currentUserInfo) {
    next("/not-authorized");
  } else if (requiresAuth && !currentUserInfo) {
    next("/signin");
  } else {
    next();
  }
});

export default router;


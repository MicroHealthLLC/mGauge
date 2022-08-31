import Auth from "@aws-amplify/auth";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import("../views/auth/Signin.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import("../views/auth/SignUp.vue"),
  },
  {
    path: "/verify",
    name: "SignUpVerify",
    props: true,
    component: () =>
      import("../views/auth/SignUpVerify.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPW",
    component: () =>
      import("../views/auth/ResetPW.vue"),
  },
  {
    path: "/not-authorized",
    name: "NoAuth",
    component: () =>
      import("../views/auth/NoAuth.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("../views/Profile.vue"),
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
    path: "/gauges/sandbox",
    name: "Sandbox",
    component: () =>
      import("../components/Gauges/Sandbox.vue"),
    meta: { requiresAuth: true},
  },
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


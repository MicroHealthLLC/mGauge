<template>
    <v-row class="tt">
      <v-col>
        <div class="grid-container">
          <v-card
            @click="openPage(card.route)"
            v-for="(card, index) in navCards"
            :key="index"
            class="nav-card text-center"
          >
            <v-img
              :src="card.img"
              class="mx-auto"
              :class="{ 'mobile-svg-size': isXs }"
            />
            <v-card-title class="d-flex justify-center mb-2"
              ><div class="card-title" :class="`card-title-${index}`">
                {{ card.title }}
              </div></v-card-title
            >
            <v-card-subtitle>{{ card.body }}</v-card-subtitle>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  
  export default {
    name: "Home",
    // mixins: [utilitiesMixin],
    data() {
      return {
        navCards: [
          {
            title: "mGAUGE Sandbox",
            body: "Explore and learn mGAUGES",
            img:   "../assets/gauge.jpg",
            route: "/gauges/sandbox",
          },
          {
            title: "mGAUGE Center (Coming Soon)",
            body: "Create, share, and save mGAUGES",
            img: "../assets/gauge.jpg",
            route: "/gauges/sandbox",
          },
        //   {
        //     title: "Browse Fitness Videos",
        //     body: "Take a wellness break and follow along with a quick fitness video",
        //     img: "/svg/running.jpg",
        //     route: "/activities/videos",
        //   },
        //   {
        //     title: "Browse Wellness Articles",
        //     body: "Read articles filled with useful wellness tips and information",
        //     img: "/svg/tablet_browse.jpg",
        //     route: "/activities/articles",
        //   },
        ],
      };
    },
    methods: {
      openPage(route) {
        this.$router.push(route);
      },
    },
    computed: {
      isXs() {
        return this.$vuetify.breakpoint.xsOnly;
      },
    },
    async mounted() {
      //
    },
  };
  </script>
  
  <style scoped>
  .tt{
    background-color: rgba(255, 255, 255, 0.5);
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  ::v-deep .v-card__title {
    word-break: unset;
    font-size: 16px;
  }
  .mobile-svg-size {
    width: 200px;
    height: 300px;
  }
  .card-title {
    line-height: 1;
    border-bottom: 5px solid #fff;
    -webkit-transition: border 500ms ease-out;
    -moz-transition: border 500ms ease-out;
    -o-transition: border 500ms ease-out;
    transition: border 500ms ease-out;
  }
  /* .nav-card{
    height: 18vh;
  } */
  .nav-card:hover .card-title-0 {
    border-bottom: 5px solid var(--mh-orange);
  }
  .nav-card:hover .card-title-1 {
    border-bottom: 5px solid var(--mh-green);
  }
  .nav-card:hover .card-title-2 {
    border-bottom: 5px solid var(--mh-blue);
  }
  .nav-card:hover .card-title-3 {
    border-bottom: 5px solid var(--mh-orange);
  }
  </style>
  
import Vue from 'vue';
import VueRouter from 'vue-router';
import MeetupsPage from "../components/MeetupsPage";
import MeetupPage from "../components/MeetupPage";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: MeetupsPage,
    },
    {
      path: '/meetups',
      name: 'meetups-list',
      component: MeetupsPage,
    },
    {
      path: '/meetups/:meetupId',
      meta: {
        showBackToList: true
      },
      name: 'meetup-page',
      component: MeetupPage
    },
  ]
})
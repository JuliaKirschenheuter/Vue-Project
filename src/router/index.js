import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/MeetupsPage')
    },

    {
      path: '/meetups/:meetupId',
      name: 'meetup-page',
      meta: {
        showBackToList: true
      },
      component: () => import('@/views/MeetupPage'),
      children: [
        {
          path: 'description',
          name: 'meetup-description',
          component: () => import('@/views/MeetupDescriptionPage')
        },
        {
          path: 'agenda',
          name: 'meetup-agenda',
          component: () => import('@/views/MeetupAgendaPage')
        }
      ]
    }
  ]
})

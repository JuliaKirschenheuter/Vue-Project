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
      path: '/create-meetup',
      name: 'new-meetup',
      component: () => import('@/views/CreateNewMeetup'),
    },
    {
      path: '/login',
      name: 'admin-area',
      component: () => import('@/views/AdminArea'),
    },
    {
      path: '/meetups/:meetupId',
      props: (route) => ({ meetupId: Number(route.params.meetupId) }),
      name: 'meetup-page',
      meta: {
        showBackToList: true
      },
      component: () => import('@/views/MeetupPage'),
      children: [
        {
          path: 'description',
          alias: '',
          name: 'meetup-description',
          component: () => import('@/views/MeetupDescriptionPage'),
          props: true
        },
        {
          path: 'agenda',
          name: 'meetup-agenda',
          component: () => import('@/views/MeetupAgendaPage'),
          props: true,
        }
      ]
    }
  ]
})
